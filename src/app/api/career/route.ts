import { NextResponse } from "next/server";
import { db } from "@/db";
import { jobApplications } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, linkedinUrl, resumeUrl, coverLetter, roleSlug } = body;

    if (!fullName || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    
    if (phone && !/^\+?[1-9]\d{1,14}$/.test(phone.replace(/[\s-()]/g, ''))) {
      return NextResponse.json({ error: "Please provide a valid phone number with country code." }, { status: 400 });
    }

    await db.insert(jobApplications).values({
      fullName,
      email,
      phone,
      linkedinUrl,
      resumeUrl,
      coverLetter,
      roleSlug: roleSlug || "general",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Career submission error:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
