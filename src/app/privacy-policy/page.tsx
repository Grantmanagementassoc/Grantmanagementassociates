import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = { 
  title: "Privacy Policy",
  description: "Learn how Grant Management Associates collects, uses, and protects personal information, including Google Analytics disclosures and CCPA/GDPR compliance.",
  alternates: {
    canonical: "https://www.grantmanagementassoc.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      breadcrumb="Privacy Policy"
      title="Privacy Policy"
      eyebrow="Legal"
      updated="November 2026"
      sections={[
        {
          heading: "Overview & Scope",
          body: (
            <p>
              Grant Management Associates (&ldquo;GMA,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides funding intelligence, grant strategy, proposal development, and post-award management to organizations across public, private, and tribal sectors. This Privacy Policy governs our collection, use, disclosure, and protection of personal information through our website (
              <a href="https://www.grantmanagementassoc.com" className="text-cyan-500 hover:underline">
                https://www.grantmanagementassoc.com
              </a>
              ) and associated digital communication channels.
            </p>
          ),
        },
        {
          heading: "Information We Collect",
          body: (
            <>
              <p>We collect information in two ways: directly when provided by you, and automatically when you interact with our website.</p>
              <div className="space-y-4 mt-3">
                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border">
                  <h3 className="font-semibold text-foreground">A. Information You Voluntarily Provide</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2 text-sm text-muted">
                    <li><strong>Contact Inquiries:</strong> Name, work email address, phone number, organization name, service interests, funding budget targets, and project descriptions.</li>
                    <li><strong>Funding Readiness Assessment:</strong> Organization name, entity type, industry sector, project description, anticipated funding amount, submission timeline, and grant history.</li>
                    <li><strong>Career & Talent Network Applications:</strong> Full name, email address, phone number, LinkedIn profile URL, link to portfolio/resume, and cover letter notes.</li>
                    <li><strong>Weekly Funding Digest:</strong> Email address provided to receive our weekly curated funding opportunities.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border">
                  <h3 className="font-semibold text-foreground">B. Information Collected Automatically (Opt-In Only)</h3>
                  <p className="mt-1 text-sm text-muted">
                    When you consent to analytics cookies via our cookie banner, we collect standard pseudonymous internet log details (browser type, operating system, pages viewed, time spent on pages, and referral source) via Google Analytics 4. IP addresses are truncated/anonymized at collection. If you decline cookies or broadcast a Global Privacy Control signal, this collection is disabled.
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          heading: "Analytics & Tracking Tools (Google Analytics 4)",
          body: (
            <>
              <p>
                Our website utilizes Google Analytics 4 (Measurement ID: <code>G-F228CZMQ4G</code>), an analytics service offered by Google LLC. We configure Google Analytics with Google Consent Mode v2:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Analytics storage is <strong>denied by default</strong> and only activated after you click &ldquo;Accept Analytics&rdquo; on our cookie banner.</li>
                <li>We do not enable advertising personalization, user ID tracking across devices, or cross-context remarketing features.</li>
                <li>We honor Global Privacy Control (GPC) signals broadcast by supported web browsers as an immediate opt-out directive.</li>
              </ul>
              <p className="mt-3">
                For detailed information on the specific cookies set by Google Analytics and instructions on revoking consent, please review our dedicated{" "}
                <Link href="/cookie-policy" className="text-cyan-500 hover:underline">
                  Cookie Policy
                </Link>.
              </p>
            </>
          ),
        },
        {
          heading: "Our Operational Tools & Service Providers",
          body: (
            <>
              <p>To operate our business and securely deliver services, we engage reputable third-party service providers who process data strictly under our instruction:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Hosting & Edge Infrastructure:</strong> Vercel Inc., hosted on enterprise-grade U.S. edge infrastructure with automatic TLS/HTTPS encryption.</li>
                <li><strong>Customer Relationship Management (CRM):</strong> Pipedrive Inc., used to manage communications, prospective engagements, and client onboarding.</li>
                <li><strong>Email Communications:</strong> Professional enterprise email providers for direct correspondence and sending our Weekly Funding Digest to opted-in subscribers.</li>
                <li><strong>AI Technology Partners:</strong> Vetted U.S.-based AI partners adhering to SOC 2 Type II attestations. We enforce strict contractual safeguards: proprietary client information and grant proposals are never routed offshore, nor are they used to train commercial AI foundation models.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "How We Use Your Information",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>To evaluate project eligibility, conduct Go/No-Go analyses, and respond to consultations requested by your organization.</li>
              <li>To send requested newsletters, grant alerts, and funding intelligence digests (with one-click unsubscribe options in every broadcast).</li>
              <li>To evaluate applications submitted to our professional talent network.</li>
              <li>To protect against automated spam, fraudulent submissions, and security vulnerabilities across our digital forms.</li>
              <li>To comply with federal, state, and foundation grant auditing and record retention obligations.</li>
            </ul>
          ),
        },
        {
          heading: "No Sale or Sharing of Personal Information",
          body: (
            <p>
              GMA does not sell, rent, monetize, or disclose your personal information to third-party data brokers. We do not share personal information with third parties for cross-context behavioral advertising.
            </p>
          ),
        },
        {
          heading: "Data Retention & Security",
          body: (
            <>
              <p>
                We maintain appropriate administrative, technical, and physical safeguards designed to protect personal information from accidental loss, unauthorized access, alteration, and disclosure. All website transmissions are encrypted using Transport Layer Security (TLS 1.3 / HTTPS).
              </p>
              <p className="mt-3">
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>General inquiries and assessment submissions: retained for up to 3 years to maintain project context.</li>
                <li>Contractual and federal grant submission records: retained for 3 to 7 years post-award closeout in accordance with federal Uniform Guidance (2 CFR § 200.334) requirements.</li>
                <li>Analytics data in Google Analytics 4: retained for 14 months before automated deletion.</li>
                <li>Newsletter subscribers: retained until you unsubscribe or request deletion.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "California Privacy Rights (CCPA / CPRA)",
          body: (
            <>
              <p>
                If you are a California resident, the California Consumer Privacy Act of 2018 (CCPA), as amended by the California Privacy Rights Act (CPRA), affords you specific rights regarding your personal information:
              </p>
              <div className="space-y-3 mt-3">
                <p><strong>Categories of Personal Information Collected (Past 12 Months):</strong> Identifiers (name, email, phone, IP address); Professional or employment-related information (employer, title, resume data); Internet or electronic network activity (browsing interactions, subject to cookie consent).</p>
                <p><strong>Your Statutory Rights:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted">
                  <li><strong>Right to Know / Access:</strong> You may request disclosure of the specific pieces and categories of personal information we have collected about you.</li>
                  <li><strong>Right to Delete:</strong> You may request the deletion of personal information we have collected, subject to legal and regulatory retention exceptions.</li>
                  <li><strong>Right to Correct:</strong> You may request correction of inaccurate personal information.</li>
                  <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you in pricing, service levels, or availability for exercising your privacy rights.</li>
                </ul>
                <p className="text-sm">
                  To exercise your California privacy rights, submit a verifiable consumer request to{" "}
                  <a href="mailto:privacy@grantmanagementassoc.com" className="text-cyan-500 hover:underline">
                    privacy@grantmanagementassoc.com
                  </a>{" "}
                  with the subject &ldquo;California Privacy Rights Request.&rdquo;
                </p>
              </div>
            </>
          ),
        },
        {
          heading: "European & International Visitors (GDPR / UK GDPR)",
          body: (
            <>
              <p>
                For visitors and clients located in the European Economic Area (EEA), the United Kingdom, or Switzerland, GMA acts as a Data Controller. Our legal bases for processing personal data under the General Data Protection Regulation (GDPR) include:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li><strong>Consent:</strong> For opt-in Google Analytics cookies and newsletter subscriptions. You may withdraw consent at any time.</li>
                <li><strong>Contractual Performance:</strong> When processing inquiries, assessments, or delivering grant consulting contracts requested by you.</li>
                <li><strong>Legitimate Interests:</strong> For network security, fraud prevention, and evaluating business proposals.</li>
              </ul>
              <p className="mt-3">
                If data is transferred outside the EEA/UK to our U.S. infrastructure, we ensure adequate safeguards are implemented in accordance with Chapter V of the GDPR (such as Standard Contractual Clauses). You have the right to request access, rectification, erasure, restriction of processing, data portability, and the right to lodge a complaint with your local data protection supervisory authority.
              </p>
            </>
          ),
        },
        {
          heading: "Children's Privacy",
          body: (
            <p>
              Our website and professional services are directed exclusively to organizations, businesses, and adults aged 18 and older. We do not knowingly solicit or collect personal information from individuals under the age of 16.
            </p>
          ),
        },
        {
          heading: "Changes to This Privacy Policy",
          body: (
            <p>
              We may revise this Privacy Policy periodically to reflect technological advancements, operational changes, or new regulatory requirements. When material updates are made, we will revise the &ldquo;Last updated&rdquo; date at the top of this page.
            </p>
          ),
        },
        {
          heading: "Contact Information & Privacy Requests",
          body: (
            <>
              <p>
                If you have questions, comments, or wish to exercise any rights under this Privacy Policy, please contact our Privacy Team:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border space-y-1 text-sm">
                <p><strong>Grant Management Associates</strong></p>
                <p>Attn: Privacy Officer</p>
                <p>P.O. Box 246, Durham, CA 95938</p>
                <p>Privacy Inquiries: <a href="mailto:privacy@grantmanagementassoc.com" className="text-cyan-500 hover:underline">privacy@grantmanagementassoc.com</a></p>
                <p>General Inquiries: <a href="mailto:info@grantmanagementassoc.com" className="text-cyan-500 hover:underline">info@grantmanagementassoc.com</a></p>
                <p>Phone: {site.phone}</p>
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
