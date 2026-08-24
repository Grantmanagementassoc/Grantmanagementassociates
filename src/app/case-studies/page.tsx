import type { Metadata } from "next";
import { Section, Eyebrow, Breadcrumbs, CTACard, Stat, BackgroundGrid } from "@/components/site/ui";
import { caseStudies, site } from "@/lib/content";
import { CaseStudiesClient } from "./case-studies-client";

export const metadata: Metadata = {
  title: "Case Studies — Proven results across sectors",
  description: "A sample of the funding awards GMA has helped clients secure across energy, manufacturing, transit, and technology.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-glow/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-[1600px] px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
          <div className="max-w-3xl">
            <Eyebrow>Signature wins</Eyebrow>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-foreground leading-[0.98]">
              Proven results. <br /><span className="text-gradient-brand">Real impact.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
              A representative sample of the {site.totalSecured} in federal, state, and foundation funding GMA has secured for clients since {site.founded}.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value={site.totalSecured} label="Total secured" />
            <Stat value="500+" label="Clients served" />
            <Stat value="60+" label="Experts, including 15 PhDs" />
            <Stat value={`${site.yearsExperience}+`} label="Years" />
          </div>
        </div>
      </section>

      <Section>
        <CaseStudiesClient items={caseStudies} />
      </Section>

      <Section>
        <CTACard
          title="Ready to write your own case study?"
          subtitle="Let's talk about what winning looks like for your organization."
          primary={{ label: "Take the assessment", href: "/assessment" }}
          secondary={{ label: "Contact us", href: "/contact" }}
        />
      </Section>
    </>
  );
}
