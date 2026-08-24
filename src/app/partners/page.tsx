import type { Metadata } from "next";
import { Section, SectionTitle, Eyebrow, GlassCard, Breadcrumbs, CTACard, BackgroundGrid } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Partners & Strategic Alliances",
  description: "Extend your service line with GMA's white-label grant capabilities. Referral, technology, and strategic alliances.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-glow/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-[1600px] px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Partners" }]} />
          <div className="max-w-3xl">
            <Eyebrow>Partners</Eyebrow>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-foreground leading-[0.98]">
              Strategic partnerships <br /><span className="text-gradient-brand">for greater impact.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
              Extend your service line with GMA's white-label grant capabilities. Refer, co-brand, or fully white-label.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionTitle eyebrow="Ways to partner" title="Three models. All non-competitive by design." align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { t: "Referral Partners", d: "Introduce GMA to your clients and earn recurring revenue on qualified engagements." },
            { t: "Strategic Alliances", d: "Co-branded delivery for consultancies, law firms, and CPAs. Your brand, our expertise." },
            { t: "Technology Partners", d: "Integration and joint go-to-market for platforms serving the grant lifecycle." },
          ].map((p) => (
            <GlassCard key={p.t}>
              <div className="text-2xl">🤝</div>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{p.t}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{p.d}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "You keep the relationship", d: "GMA is grants-only. We never compete for M&A, tax, litigation, or general strategy work." },
            { t: "We handle delivery", d: "White-glove execution under your brand, with reporting cadences you set." },
            { t: "Predictable economics", d: "Referral fees, revenue share, or fixed cost pass-through — your choice." },
            { t: "Full enablement", d: "One-pagers, talk tracks, and joint-selling training for your team." },
          ].map((b) => (
            <GlassCard key={b.t}>
              <div className="text-lg font-semibold text-foreground">{b.t}</div>
              <p className="mt-2 text-muted leading-relaxed">{b.d}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <CTACard
          title="Ready to explore a partnership?"
          subtitle="Tell us about your practice and clients — we'll come back with a tailored proposal within one business day."
          primary={{ label: "Start the conversation", href: "/contact" }}
          secondary={{ label: "Learn about alliances", href: "/services/strategic-alliances" }}
        />
      </Section>
    </>
  );
}
