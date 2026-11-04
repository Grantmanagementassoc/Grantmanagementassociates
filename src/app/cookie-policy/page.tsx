import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import Link from "next/link";

export const metadata: Metadata = { 
  title: "Cookie Policy",
  description: "Learn how Grant Management Associates uses cookies and analytics technologies, and how you can manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      breadcrumb="Cookie Policy"
      title="Cookie Policy"
      eyebrow="Legal"
      updated="November 2026"
      sections={[
        {
          heading: "Introduction",
          body: (
            <p>
              Grant Management Associates (&ldquo;GMA,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and similar tracking technologies on our website (
              <a href="https://www.grantmanagementassoc.com" className="text-cyan-500 hover:underline">
                https://www.grantmanagementassoc.com
              </a>
              ) to ensure proper website functionality and to understand how visitors engage with our content. This Cookie Policy explains what cookies are, how we use them, and the choices you have to accept, reject, or control them.
            </p>
          ),
        },
        {
          heading: "What are cookies?",
          body: (
            <p>
              Cookies are small text files placed on your computer, smartphone, or tablet when you visit a website. They are widely used to make websites work efficiently, remember your preferences across sessions, and provide aggregate reporting on site traffic and performance.
            </p>
          ),
        },
        {
          heading: "Categories of cookies we use",
          body: (
            <>
              <p>We classify cookies into the following two categories:</p>
              <div className="space-y-4 mt-3">
                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border">
                  <h3 className="font-semibold text-foreground">1. Strictly Necessary Cookies (Essential)</h3>
                  <p className="mt-1 text-sm text-muted">
                    These cookies are essential for our website to operate securely and function properly. They remember basic settings like your theme preferences (dark/light mode) and whether you have accepted or declined non-essential cookies. Because these cookies are necessary to deliver the site, they do not require consent and cannot be turned off in our banner.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-glass-border">
                  <h3 className="font-semibold text-foreground">2. Analytics & Performance Cookies (Non-Essential, Opt-In Only)</h3>
                  <p className="mt-1 text-sm text-muted">
                    These cookies collect aggregate, anonymous statistics about how visitors interact with our website (e.g., which pages are visited most often, average duration, and error diagnostics). We use Google Analytics 4 for this purpose. <strong>These cookies are disabled by default and will never be loaded onto your device unless you explicitly click &ldquo;Accept&rdquo; on our cookie consent banner.</strong>
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          heading: "Google Analytics 4 disclosure",
          body: (
            <>
              <p>
                We use Google Analytics 4 (Measurement ID: <code>G-F228CZMQ4G</code>), a web analytics service provided by Google LLC. When activated upon your consent, Google Analytics sets cookies including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><code>_ga</code>: Distinguishes unique visitors (stored for up to 2 years, or until cookies are cleared).</li>
                <li><code>_ga_&lt;container-id&gt;</code>: Persists session state across page views (stored for up to 2 years).</li>
              </ul>
              <p className="mt-3">
                We implement Google Consent Mode v2 with <code>analytics_storage</code> set to <code>&apos;denied&apos;</code> by default. Google Analytics does not collect sensitive personal data or full IP addresses; IP addresses are truncated/anonymized at collection. Google processes this information under its Data Processing Terms.
              </p>
            </>
          ),
        },
        {
          heading: "Global Privacy Control (GPC) and Do Not Track",
          body: (
            <p>
              We honor Global Privacy Control (&ldquo;GPC&rdquo;) signals broadcast by modern web browsers. If your browser or extension sends an active GPC opt-out signal, we treat that signal as an automatic command to reject all non-essential analytics cookies, and Google Analytics will remain disabled.
            </p>
          ),
        },
        {
          heading: "How to manage or revoke your consent",
          body: (
            <>
              <p>
                You have full control over your cookie choices at all times:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Via our website banner:</strong> When you first visit our site, you can click &ldquo;Accept&rdquo; to enable analytics cookies or &ldquo;Reject Non-Essential&rdquo; to block them.</li>
                <li><strong>Resetting your choice:</strong> You can clear your browser storage or delete the <code>gma-cookie-consent</code> key in your browser&apos;s local storage to display the banner again.</li>
                <li><strong>Via your browser settings:</strong> Most browsers allow you to block all cookies or notify you when a cookie is set. Consult your browser&apos;s help menu (Chrome, Safari, Firefox, Edge) to adjust your cookie preferences.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Updates and contact",
          body: (
            <p>
              We may update this Cookie Policy periodically to reflect changes in our technologies or legal requirements. If you have questions regarding this policy or our privacy practices, please contact us at{" "}
              <a href="mailto:privacy@grantmanagementassoc.com" className="text-cyan-500 hover:underline">
                privacy@grantmanagementassoc.com
              </a>{" "}
              or review our{" "}
              <Link href="/privacy-policy" className="text-cyan-500 hover:underline">
                Privacy Policy
              </Link>.
            </p>
          ),
        },
      ]}
    />
  );
}

