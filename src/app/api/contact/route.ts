import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, organization, serviceInterest, budget, message } = body ?? {};
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }
    if (!/.+@.+\..+/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
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
    return NextResponse.json({ ok: true, id: row.id });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
