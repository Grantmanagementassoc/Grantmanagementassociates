import type { Metadata } from "next";
import { Eyebrow, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";
import { KcaClient } from "./kca-client";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Key Considerations Analysis (KCA) Methodology — Go/No-Go Decision Engine",
  description:
    "Explore GMA's proprietary 22-factor Key Considerations Analysis methodology. Inspect our redacted sample scorecard and download the official 1-page executive KCA guide.",
  alternates: {
    canonical: "https://www.grantmanagementassoc.com/methodology",
  },
};

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground noise pt-32 pb-24 relative overflow-hidden">
      <BackgroundGrid />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-glow/10 blur-[140px] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Methodology", href: "/methodology" }, { label: "Key Considerations Analysis (KCA)" }]} />

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>Proprietary Funding Intelligence</Eyebrow>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold font-display text-foreground leading-[1.05]">
            The <span className="text-gradient-brand">KCA Methodology</span>: Strategy Before Words.
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Writing a 100-page federal grant proposal before verifying whether you can win is the costliest mistake in funding. GMA subjects every opportunity to a 22-factor stress test to protect your capital and maximize award probability.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#guide-download" className="btn-primary">
              Download 1-Page KCA Guide ↓
            </a>
            <Link href="/assessment" className="btn-secondary">
              Take Free Funding Assessment →
            </Link>
          </div>
        </div>

        {/* INTERACTIVE SCORECARD & TABS */}
        <KcaClient />
      </div>
    </main>
  );
}

