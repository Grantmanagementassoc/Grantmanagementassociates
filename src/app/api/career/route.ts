import { NextResponse } from "next/server";
import { db } from "@/db";
import { jobApplications } from "@/db/schema";
import { dispatchLead } from "@/lib/integrations";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, linkedinUrl, resumeUrl, coverLetter, roleSlug, _website_hp, _rendered_at } = body;

    // Anti-spam honeypot and time-trap protection
    if (_website_hp) {
      return NextResponse.json({ success: true });
    }
    if (_rendered_at && Date.now() - Number(_rendered_at) < 1000) {
      return NextResponse.json({ success: true });
    }

    if (!fullName || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    
    if (phone && !/^\+?[1-9]\d{1,14}$/.test(phone.replace(/[\s-()]/g, ''))) {
      return NextResponse.json({ error: "Please provide a valid phone number with country code." }, { status: 400 });
    }

    const [row] = await db.insert(jobApplications).values({
      fullName,
      email,
      phone,
      linkedinUrl,
      resumeUrl,
      coverLetter,
      roleSlug: roleSlug || "general",
    }).returning({ id: jobApplications.id });

    // Pipedrive & Shared Inbox notification
    await dispatchLead({
      name: fullName,
      email,
      phone: phone || null,
      sourceTag: "career-application",
      notes: coverLetter || `Application for talent pool: ${roleSlug || "general"}`,
      details: { roleSlug: roleSlug || "general", linkedinUrl, resumeUrl, applicationId: row?.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Career submission error:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
