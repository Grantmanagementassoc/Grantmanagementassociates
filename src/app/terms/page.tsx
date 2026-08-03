import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage
      breadcrumb="Terms of Service"
      title="Terms of Service"
      eyebrow="Legal"
      updated="January 1, 2026"
      sections={[
        { heading: "Acceptance of terms", body: <p>By accessing or using the GMA website and services, you agree to be bound by these Terms of Service.</p> },
        { heading: "Description of services", body: <p>GMA provides grant management, funding identification, proposal development, and related consulting services under written engagement agreements.</p> },
        { heading: "Client responsibilities", body: <p>Clients agree to provide accurate information and reasonable cooperation for GMA to perform its services.</p> },
        { heading: "Intellectual property", body: <p>Content on this website is owned by GMA. Client deliverables under an engagement are owned by the client per that engagement's terms.</p> },
        { heading: "Confidentiality", body: <p>GMA treats all client information as confidential and enforces internal access controls accordingly.</p> },
        { heading: "Payment terms", body: <p>Fees and payment schedules are specified in individual engagement agreements. Success-based fees are not offered.</p> },
        { heading: "Limitation of liability", body: <p>GMA is not liable for indirect, consequential, or incidental damages. Total liability is limited to fees paid under the applicable engagement.</p> },
        { heading: "Termination", body: <p>Either party may terminate an engagement per the terms of the applicable agreement.</p> },
        { heading: "Governing law", body: <p>These Terms are governed by the laws of the State of Utah, without regard to conflict of law principles.</p> },
        { heading: "Changes to terms", body: <p>We may update these Terms; material changes will be posted on this page with a new effective date.</p> },
      ]}
    />
  );
}
