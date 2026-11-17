import Link from "next/link";
export const dynamic = "force-dynamic";
import { db } from "@/db";
import { contactSubmissions, assessmentResponses, adminUsers, jobApplications } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { requireAdmin } from "@/lib/admin-auth";
import { redirect } from "next/navigation";
import { SubmissionManager } from "./submission-manager";

type SP = { type?: string };

export default async function SubmissionsPage({ searchParams }: { searchParams: Promise<SP> }) {
  try {
    await requireAdmin("submissions");
  } catch {
    redirect("/admin");
  }

  const { type = "all" } = await searchParams;

  let contacts: any[] = [];
  let assessments: any[] = [];
  let careers: any[] = [];
  let employees: any[] = [];

  try {
    [contacts, assessments, careers, employees] = await Promise.all([
      db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt)),
      db.select().from(assessmentResponses).orderBy(desc(assessmentResponses.createdAt)),
      db.select().from(jobApplications).orderBy(desc(jobApplications.createdAt)),
      db.select({ id: adminUsers.id, name: adminUsers.name }).from(adminUsers).where(eq(adminUsers.active, true)),
    ]);
  } catch (e) {
    console.error("Submissions load error:", e);
  }

  // Helper to identify bot spam signatures
  const isSpamRecord = (x: any) => {
    const isPureDigits = /^\d+$/.test((x.message || "").trim());
    const isGibberishName =
      (x.name || "").length > 12 &&
      !x.name.includes(" ") &&
      (x.name.match(/[A-Z]/g) || []).length >= 3 &&
      (x.name.match(/[a-z]/g) || []).length >= 3;
    const isSpamDots = (x.email || "").split("@")[0].split(".").length > 3 && (x.email || "").includes("@gmail.com");
    return isPureDigits || isGibberishName || isSpamDots;
  };

  const contactRows = contacts.map((x) => {
    const isPlaybook = Boolean(x.serviceInterest?.toLowerCase().includes("playbook"));
    const isSpam = isSpamRecord(x);
    const subType: "spam" | "playbook" | "contact" = isSpam ? "spam" : isPlaybook ? "playbook" : "contact";

    return {
      id: x.id,
      type: "contact" as const,
      subType,
      title: x.organization || x.name,
      name: x.name,
      email: x.email,
      phone: x.phone,
      createdAt: x.createdAt?.toISOString?.() || "",
      status: x.status,
      assignedTo: x.assignedTo,
      internalNotes: x.internalNotes,
      serviceInterest: x.serviceInterest,
      fields: [
        { label: "Name", value: x.name },
        { label: "Email", value: x.email },
        { label: "Phone", value: x.phone || "" },
        { label: "Organization", value: x.organization || "" },
        { label: "Service / Source", value: x.serviceInterest || "" },
        { label: "Budget", value: x.budget || "" },
        { label: "Message", value: x.message },
      ],
    };
  });

  const assessmentRows = assessments.map((x) => ({
    id: x.id,
    type: "assessment" as const,
    subType: "assessment" as const,
    title: x.organizationName,
    name: x.contactName,
    email: x.contactEmail,
    phone: x.contactPhone,
    createdAt: x.createdAt?.toISOString?.() || "",
    status: x.status,
    assignedTo: x.assignedTo,
    internalNotes: x.internalNotes,
    serviceInterest: "Funding Assessment",
    fields: [
      { label: "Contact", value: x.contactName },
      { label: "Email", value: x.contactEmail },
      { label: "Phone", value: x.contactPhone || "" },
      { label: "Organization", value: x.organizationName },
      { label: "Organization type", value: x.organizationType || "" },
      { label: "Industry", value: x.industry || "" },
      { label: "Project", value: x.projectDescription || "" },
      { label: "Funding amount", value: x.fundingAmount || "" },
      { label: "Timeline", value: x.timeline || "" },
      { label: "Prior grants", value: x.priorGrants || "" },
      { label: "Score", value: String(x.score || "") },
    ],
  }));

  const careerRows = careers.map((x) => ({
    id: x.id,
    type: "career" as const,
    subType: "career" as const,
    title: x.fullName,
    name: x.fullName,
    email: x.email,
    phone: x.phone,
    createdAt: x.createdAt?.toISOString?.() || "",
    status: x.status,
    assignedTo: null,
    internalNotes: "",
    serviceInterest: "Job Application",
    fields: [
      { label: "Name", value: x.fullName },
      { label: "Email", value: x.email },
      { label: "Phone", value: x.phone || "" },
      { label: "Role", value: x.roleSlug },
      { label: "LinkedIn", value: x.linkedinUrl || "" },
      { label: "Resume", value: x.resumeUrl || "" },
      { label: "Cover Letter", value: x.coverLetter || "" },
    ],
  }));

  let allRows = [...contactRows, ...assessmentRows, ...careerRows];

  // Filtering logic
  let filteredRows = allRows;
  if (type === "all") {
    // Hide spam by default from the primary queue
    filteredRows = allRows.filter((r) => r.subType !== "spam");
  } else if (type === "playbook") {
    filteredRows = allRows.filter((r) => r.subType === "playbook");
  } else if (type === "contact") {
    filteredRows = allRows.filter((r) => r.type === "contact" && r.subType === "contact");
  } else if (type === "assessment") {
    filteredRows = allRows.filter((r) => r.type === "assessment");
  } else if (type === "career") {
    filteredRows = allRows.filter((r) => r.type === "career");
  } else if (type === "spam") {
    filteredRows = allRows.filter((r) => r.subType === "spam");
  }

  filteredRows.sort((a, b) => +new Date(b.createdAt || 0) - +new Date(a.createdAt || 0));

  const spamCount = contactRows.filter((r) => r.subType === "spam").length;
  const playbookCount = contactRows.filter((r) => r.subType === "playbook").length;

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[.16em] text-blue-700">Pipeline</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Client submissions</h1>
          <p className="mt-2 text-sm text-slate-500">
            Contact inquiries, playbook downloads, funding assessments, and job applications.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {[
          ["all", "All Verified"],
          ["playbook", `Playbooks (${playbookCount})`],
          ["contact", "Contact Forms"],
          ["assessment", "Assessments"],
          ["career", "Careers"],
          ["spam", `Spam Queue (${spamCount})`],
        ].map(([v, l]) => (
          <Link
            key={v}
            href={v === "all" ? "/admin/submissions" : `/admin/submissions?type=${v}`}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              type === v
                ? "bg-[#18243a] text-white shadow-sm"
                : v === "spam" && spamCount > 0
                ? "bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {l}
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <SubmissionManager rows={filteredRows} employees={employees} activeTab={type} spamCount={spamCount} />
      </div>
    </>
  );
}
