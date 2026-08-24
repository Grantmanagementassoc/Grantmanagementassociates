import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle, Eyebrow, GlassCard, Breadcrumbs, CTACard, Accordion, BackgroundGrid } from "@/components/site/ui";
import { services } from "@/lib/content";
import * as Icons from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Grant Writing, Funding Identification, Go/No-Go, AI Matching",
  description: "The full grants stack — AI-matched pipeline, disciplined Go/No-Go, expert-written proposals, and post-award management.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-[1600px] px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <div className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-foreground leading-[0.98]">
              Comprehensive <br /><span className="text-gradient-brand">grant management.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
              From opportunity identification through post-award management — pick the stage where you need the most leverage.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group">
              <GlassCard className="h-full flex flex-col">
                <div className="text-cyan-400">
                  {(() => {
                    const IconComponent = Icons[s.icon as keyof typeof Icons] as React.ElementType;
                    return IconComponent ? <IconComponent size={32} strokeWidth={1.5} /> : null;
                  })()}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-cyan-300 transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm text-cyan-300/80">{s.tagline}</p>
                <p className="mt-4 text-sm text-muted leading-relaxed line-clamp-3">{s.summary}</p>
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 text-xs text-cyan-300 flex items-center gap-1">
                  Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="How we work"
          title={<>A predictable process, <span className="text-gradient-brand">a proven outcome</span>.</>}
          align="center"
        />
        <div className="mt-14 grid md:grid-cols-5 gap-3">
          {["Discover", "Match", "Decide", "Execute", "Manage"].map((step, i) => (
            <div key={step} className="glass rounded-2xl p-6">
              <div className="font-mono text-xs text-cyan-300">0{i + 1}</div>
              <div className="mt-2 text-lg font-semibold text-foreground">{step}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <SectionTitle eyebrow="Common questions" title="Services FAQ." />
          </div>
          <Accordion
            items={[
              { q: "Can you handle just one part of the process?", a: "Yes. Some clients only want Go/No-Go analysis; others want white-glove full-lifecycle management. We size the engagement to your capacity." },
              { q: "What agencies do you cover?", a: "All federal grantmaking agencies plus state, local, and foundation programs." },
              { q: "Do you offer contingency pricing?", a: "No — federal agencies discourage it and it misaligns incentives. Fixed-fee or hourly only." },
              { q: "Do you write for state and local grants?", a: "Yes — we've written and won in all 50 states." },
            ]}
          />
        </div>
      </Section>

      <Section>
        <CTACard
          title="Not sure which service fits?"
          subtitle="Take our 2-minute assessment and we'll recommend the right entry point."
          primary={{ label: "Take the assessment", href: "/assessment" }}
          secondary={{ label: "Talk to a strategist", href: "/contact" }}
        />
      </Section>
    </>
  );
}
