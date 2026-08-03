import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      breadcrumb="Privacy Policy"
      title="Privacy Policy"
      eyebrow="Legal"
      updated="January 1, 2026"
      sections={[
        { heading: "Information we collect", body: <p>We collect the information you voluntarily provide via forms (name, email, organization, phone, message), as well as standard technical information (IP address, browser type, pages visited) via analytics tools.</p> },
        { heading: "How we use your information", body: <p>To respond to inquiries, deliver services you request, send opt-in newsletters, and improve our website. We do not sell your personal information.</p> },
        { heading: "Cookies & tracking", body: <p>We use privacy-respecting analytics to understand how visitors use our site. You can disable cookies in your browser at any time. See our Cookie Policy for details.</p> },
        { heading: "Data security", body: <p>We use industry-standard encryption in transit and at rest. Our AI tooling is limited to U.S.-based, SOC 2 partners. See our Responsible AI page for details.</p> },
        { heading: "Your rights", body: <p>You may request access, correction, or deletion of your personal information at any time by contacting us at {site.email}. We honor CCPA and GDPR rights where applicable.</p> },
        { heading: "Third-party services", body: <p>We use vetted third-party services (analytics, email delivery, CRM) that meet our security and privacy standards.</p> },
        { heading: "Children's privacy", body: <p>Our services are directed to organizations, not individuals under 16. We do not knowingly collect personal information from children.</p> },
        { heading: "Changes to this policy", body: <p>We may update this policy from time to time. Material changes will be announced on this page with an updated effective date.</p> },
        { heading: "Contact us", body: <p>Questions? Reach us at {site.email} or {site.phone}.</p> },
      ]}
    />
  );
}
