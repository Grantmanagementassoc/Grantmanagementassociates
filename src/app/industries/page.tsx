import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle, Eyebrow, GlassCard, Breadcrumbs, CTACard, BackgroundGrid } from "@/components/site/ui";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries — Sector-specialist grant expertise",
  description: "GMA brings sector-specialist teams to clean energy, transportation, tech, healthcare, education, tribal nations, nonprofits, and manufacturing.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-glow/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
          <div className="max-w-3xl">
            <Eyebrow>Industries</Eyebrow>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-white leading-[0.98]">
              Expertise across <br /><span className="text-gradient-brand">every funded sector.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed">
              Sector-specialist teams — not generalists — bring domain knowledge from day one.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group">
              <GlassCard className="h-full flex flex-col">
                <div className="text-3xl">{ind.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">{ind.name}</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-3">{ind.blurb}</p>
                <div className="mt-4 pt-3 border-t border-white/5 flex gap-4">
                  {ind.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-sm font-semibold text-gradient-gold">{s.value}</div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <CTACard
          title="Don't see your sector?"
          subtitle="We work across nearly every federally-funded industry — chances are we've been there."
          primary={{ label: "Talk to a strategist", href: "/contact" }}
          secondary={{ label: "See case studies", href: "/case-studies" }}
        />
      </Section>
    </>
  );
}
