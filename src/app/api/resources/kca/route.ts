import { NextResponse } from "next/server";
import { dispatchLead } from "@/lib/integrations";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, organization, optInNewsletter, _website_hp, _rendered_at } = body ?? {};

    // Anti-spam honeypot and time-trap protection
    if (_website_hp) {
      return NextResponse.json({ ok: true, accessGranted: true });
    }
    if (_rendered_at && Date.now() - Number(_rendered_at) < 1000) {
      return NextResponse.json({ ok: true, accessGranted: true });
    }

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required to access the KCA Guide." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // Pipedrive & Shared Inbox notification
    await dispatchLead({
      name: String(name),
      email: String(email),
      organization: organization ? String(organization) : null,
      sourceTag: "kca-scorecard-guide",
      notes: "Requested official 1-page Key Considerations Analysis (KCA) methodology guide and redacted scorecard.",
      optInNewsletter: Boolean(optInNewsletter),
      details: {
        resource: "KCA One-Page Guide & Redacted Scorecard",
        timestamp: new Date().toISOString(),
      },
    });

    return NextResponse.json({
      ok: true,
      accessGranted: true,
      message: "Your download has been authorized. A copy has also been sent to your inbox.",
    });
  } catch (err: any) {
    console.error("KCA resource request error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to process guide request" },
      { status: 500 }
    );
  }
}

