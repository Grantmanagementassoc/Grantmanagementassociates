import { NextResponse } from "next/server";
import { db } from "@/db";
import { assessmentResponses } from "@/db/schema";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

type Payload = {
  organizationName: string;
  organizationType?: string;
  industry?: string;
  projectDescription?: string;
  fundingAmount?: string;
  timeline?: string;
  priorGrants?: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
};

function scoreAssessment(p: Payload): { score: number; recommendations: string[] } {
  let s = 55;
  const recs: string[] = [];
  if (p.priorGrants === "yes-multiple") { s += 15; recs.push("Prior grant experience — you're a strong candidate for larger federal opportunities."); }
  else if (p.priorGrants === "yes-one") { s += 8; recs.push("Some grant history — well-positioned for repeat federal or state programs."); }
  else { recs.push("First-time applicants benefit most from our Go / No-Go analysis before pursuing federal awards."); }

  if (p.organizationType === "nonprofit") recs.push("MissionMomentum is our right-sized retainer for nonprofit development teams.");
  if (p.organizationType === "corporation" || p.organizationType === "startup") recs.push("Corporate applicants should prioritize DOE/DOD/Commerce programs where GMA has deep experience.");
  if (p.organizationType === "tribal") recs.push("Tribal set-asides and DOE-IE programs offer meaningful, less-competitive access.");
  if (p.organizationType === "government") recs.push("FTA, FHWA, EPA, and EDA programs are core to public-sector clients like yours.");

  const amt = p.fundingAmount || "";
  if (amt.includes("10M+")) { s += 10; recs.push("Awards over $10M are our sweet spot — see our $160M Microporous and $117M Golden Empire case studies."); }
  else if (amt.includes("1M")) { s += 5; }

  if ((p.industry ?? "").toLowerCase().includes("energy")) recs.push("Clean energy: DOE-LPO, DOE-GRIP, and EPA GGRF are active. IRA runway remains strong.");
  if ((p.industry ?? "").toLowerCase().includes("transport")) recs.push("Transportation: FTA Low-No, RAISE, and CRISI cycles are open.");
  if ((p.industry ?? "").toLowerCase().includes("tech")) recs.push("Technology: CHIPS second wave and NIST/NSF programs offer meaningful capital.");

  s = Math.min(98, s);
  return { score: s, recommendations: recs };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;
    if (!body.organizationName || !body.contactName || !body.contactEmail) {
      return NextResponse.json({ error: "Organization, name, and email required." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.contactEmail)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (body.contactPhone && !/^\+?[1-9]\d{1,14}$/.test(body.contactPhone.replace(/[\s-()]/g, ''))) {
      return NextResponse.json({ error: "Please provide a valid phone number with country code." }, { status: 400 });
    }
    const { score, recommendations } = scoreAssessment(body);
    const [row] = await db
      .insert(assessmentResponses)
      .values({
        organizationName: body.organizationName,
        organizationType: body.organizationType ?? null,
        industry: body.industry ?? null,
        projectDescription: body.projectDescription ?? null,
        fundingAmount: body.fundingAmount ?? null,
        timeline: body.timeline ?? null,
        priorGrants: body.priorGrants ?? null,
        contactName: body.contactName,
        contactEmail: body.contactEmail.toLowerCase().trim(),
        contactPhone: body.contactPhone ?? null,
        score,
        recommendations: sql`${JSON.stringify(recommendations)}::jsonb`,
      })
      .returning({ id: assessmentResponses.id });
    return NextResponse.json({ ok: true, id: row.id, score, recommendations });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
