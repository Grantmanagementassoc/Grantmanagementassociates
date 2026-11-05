import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { dispatchLead } from "@/lib/integrations";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, organization, serviceInterest, budget, message, optInNewsletter, _website_hp, _rendered_at } = body ?? {};

    // Anti-spam honeypot and time-trap protection
    if (_website_hp) {
      return NextResponse.json({ ok: true });
    }
    if (_rendered_at && Date.now() - Number(_rendered_at) < 1000) {
      return NextResponse.json({ ok: true });
    }
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (phone && !/^\+?[1-9]\d{1,14}$/.test(phone.replace(/[\s-()]/g, ''))) {
      return NextResponse.json({ error: "Please provide a valid phone number with country code." }, { status: 400 });
    }
    const [row] = await db
      .insert(contactSubmissions)
      .values({
        name: String(name),
        email: String(email).toLowerCase().trim(),
        phone: phone ? String(phone) : null,
        organization: organization ? String(organization) : null,
        serviceInterest: serviceInterest ? String(serviceInterest) : null,
        budget: budget ? String(budget) : null,
        message: String(message),
      })
      .returning({ id: contactSubmissions.id });

    // Pipedrive & Shared Inbox notification
    await dispatchLead({
      name: String(name),
      email: String(email),
      phone: phone ? String(phone) : null,
      organization: organization ? String(organization) : null,
      sourceTag: "website-contact",
      notes: String(message),
      details: { serviceInterest, budget, submissionId: row.id },
      optInNewsletter: Boolean(optInNewsletter),
    });

    return NextResponse.json({ ok: true, id: row.id });
  } catch (err) {
    console.error("Database insert error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? `${err.message} - ${err.cause || ''}` : "Unknown error", detail: err },
      { status: 500 }
    );
  }
}
