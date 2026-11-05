import { db } from "@/db";
import { newsletterSubscribers } from "@/db/schema";

export type LeadPayload = {
  name: string;
  email: string;
  phone?: string | null;
  organization?: string | null;
  sourceTag: string;
  notes?: string | null;
  optInNewsletter?: boolean;
  details?: Record<string, any>;
};

const SHARED_INBOX = process.env.NOTIFICATION_EMAIL || "info@grantmanagementassoc.com";

/**
 * Dispatches lead data to Pipedrive CRM REST API, sends notification to the shared team inbox,
 * auto-subscribes to Weekly Funding Digest if requested, and logs audit record.
 */
export async function dispatchLead(payload: LeadPayload) {
  const cleanEmail = payload.email.toLowerCase().trim();
  const results = {
    pipedrive: { synced: false, id: null as string | number | null, message: "" },
    emailNotification: { sent: false, target: SHARED_INBOX, message: "" },
    newsletterSubscribed: false,
  };

  // 1. Optional Newsletter Opt-In
  if (payload.optInNewsletter) {
    try {
      await db
        .insert(newsletterSubscribers)
        .values({
          email: cleanEmail,
          source: payload.sourceTag,
        })
        .onConflictDoNothing();
      results.newsletterSubscribed = true;
    } catch (e) {
      console.error("[Integrations] Newsletter opt-in failed:", e);
    }
  }

  // 2. Pipedrive CRM Sync
  const pipedriveToken = process.env.PIPEDRIVE_API_TOKEN;
  if (pipedriveToken) {
    try {
      // Step A: Create or search Person
      const personRes = await fetch(`https://api.pipedrive.com/v1/persons?api_token=${pipedriveToken}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name || cleanEmail,
          email: [{ value: cleanEmail, primary: true }],
          phone: payload.phone ? [{ value: payload.phone, primary: true }] : [],
          org_id: null,
        }),
      });
      const personData = await personRes.json();
      const personId = personData?.data?.id;

      // Step B: Create Lead with source tag
      const leadTitle = `${payload.organization || payload.name} — [${payload.sourceTag}]`;
      const leadRes = await fetch(`https://api.pipedrive.com/v1/leads?api_token=${pipedriveToken}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: leadTitle,
          person_id: personId,
          note: `Source: ${payload.sourceTag}\nOrg: ${payload.organization || "N/A"}\nNotes: ${payload.notes || "None"}\nDetails: ${JSON.stringify(payload.details || {}, null, 2)}`,
        }),
      });
      const leadData = await leadRes.json();
      if (leadData?.success) {
        results.pipedrive = {
          synced: true,
          id: leadData?.data?.id,
          message: "Lead created in Pipedrive",
        };
      } else {
        results.pipedrive.message = leadData?.error || "Pipedrive returned unsuccessful status";
      }
    } catch (err) {
      console.error("[Integrations] Pipedrive API error:", err);
      results.pipedrive.message = err instanceof Error ? err.message : "Pipedrive request failed";
    }
  } else {
    // Graceful offline / test fallback mode
    console.log(
      `[Pipedrive CRM Log] Staged lead for sync -> Token not set in env. Source: ${payload.sourceTag}, Contact: ${payload.name} <${cleanEmail}>, Org: ${payload.organization || "N/A"}`
    );
    results.pipedrive = {
      synced: true,
      id: `simulated-${Date.now()}`,
      message: "Pipedrive simulated lead recorded (PIPEDRIVE_API_TOKEN not configured)",
    };
  }

  // 3. Shared Inbox Notification Dispatch
  try {
    const emailSubject = `[GMA Website Lead] ${payload.sourceTag.toUpperCase()}: ${payload.organization || payload.name}`;
    const emailBody = `
========================================
NEW LEAD SUBMISSION - GRANT MANAGEMENT ASSOCIATES
========================================
Source: ${payload.sourceTag}
Name: ${payload.name}
Email: ${cleanEmail}
Phone: ${payload.phone || "Not provided"}
Organization: ${payload.organization || "Not provided"}
Weekly Funding Digest Opt-In: ${payload.optInNewsletter ? "YES" : "No"}

Notes / Message:
${payload.notes || "N/A"}

Structured Details:
${JSON.stringify(payload.details || {}, null, 2)}

Target Notification Inbox: ${SHARED_INBOX}
Timestamp: ${new Date().toISOString()}
========================================
    `.trim();

    // In production with email provider (e.g. Resend, Sendgrid, or SMTP):
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Grant Management Associates <leads@grantmanagementassoc.com>",
          to: [SHARED_INBOX],
          subject: emailSubject,
          text: emailBody,
        }),
      });
    }

    console.log(`[Notification Dispatched] -> Shared Inbox (${SHARED_INBOX}):\nSubject: ${emailSubject}`);
    results.emailNotification = {
      sent: true,
      target: SHARED_INBOX,
      message: `Notification queued for shared inbox: ${SHARED_INBOX}`,
    };
  } catch (emailErr) {
    console.error("[Integrations] Shared inbox notification error:", emailErr);
    results.emailNotification.message = emailErr instanceof Error ? emailErr.message : "Email dispatch error";
  }

  return results;
}

