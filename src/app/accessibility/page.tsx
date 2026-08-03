import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Accessibility Statement" };

export default function AccessibilityPage() {
  return (
    <LegalPage
      breadcrumb="Accessibility"
      title="Accessibility Statement"
      eyebrow="Commitment"
      updated="January 1, 2026"
      sections={[
        { heading: "Our commitment", body: <p>GMA is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.</p> },
        { heading: "Conformance status", body: <p>The Web Content Accessibility Guidelines (WCAG) 2.1 Level AA is our target standard. We audit our site regularly and address issues as they are discovered.</p> },
        { heading: "Accessibility features", body: <p>Semantic HTML, keyboard navigation, visible focus indicators, sufficient color contrast, alt text on informative images, respect for reduced-motion preferences, and skip-to-content links.</p> },
        { heading: "Known limitations", body: <p>Some embedded third-party content (video players, calendars) may not fully meet WCAG 2.1 AA. We are actively working with partners to improve.</p> },
        { heading: "Feedback", body: <p>We welcome feedback on the accessibility of this site. Please email {site.email} with any concerns and we will respond within five business days.</p> },
      ]}
    />
  );
}
