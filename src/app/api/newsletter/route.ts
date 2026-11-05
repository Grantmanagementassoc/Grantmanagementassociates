import { NextResponse } from "next/server";
import { db } from "@/db";
import { newsletterSubscribers } from "@/db/schema";
import { dispatchLead } from "@/lib/integrations";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { email, source, _website_hp, _rendered_at } = await req.json();

    // Anti-spam honeypot and time-trap protection
    if (_website_hp) {
      return NextResponse.json({ ok: true });
    }
    if (_rendered_at && Date.now() - Number(_rendered_at) < 1000) {
      return NextResponse.json({ ok: true });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    const cleanEmail = email.toLowerCase().trim();
    await db
      .insert(newsletterSubscribers)
      .values({ email: cleanEmail, source: source ?? "newsletter-signup" })
      .onConflictDoNothing();

    // Pipedrive & Shared Inbox notification
    await dispatchLead({
      name: cleanEmail.split("@")[0],
      email: cleanEmail,
      sourceTag: `newsletter-${source ?? "signup"}`,
      notes: "Subscribed to GMA Weekly Funding Digest",
      optInNewsletter: true,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
