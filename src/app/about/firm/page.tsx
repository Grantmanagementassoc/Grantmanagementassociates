import type { Metadata } from "next";
import { Section, SectionTitle, Eyebrow, GlassCard, Stat, CTACard, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";
import { site, timeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Firm | About Us",
  description: `Building funding success since ${site.founded}. GMA is a WOSB-certified funding intelligence firm.`,
};

export default function FirmPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-[1600px] px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about/firm" }, { label: "Our Firm" }]} />
          <div className="max-w-3xl">
            <Eyebrow>Our Firm</Eyebrow>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-foreground leading-[0.98]">
              Building funding success <br /><span className="text-gradient-brand">since {site.founded}.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
              We're a funding intelligence and strategy firm helping organizations — from Fortune 500 companies to Tribal Nations,
              transit agencies to clean-energy startups — architect winning funding strategies.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <Section>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div>
            <SectionTitle
              eyebrow="Mission & values"
              title={<>We don't just write grants — <span className="text-gradient-brand">we architect winning strategies.</span></>}
              subtitle="Founded on the belief that transformative capital shouldn't be reserved for organizations with in-house grants teams."
            />
          </div>
          <div className="grid gap-4">
            {[
              { t: "Rigor before effort", d: "Our Key Considerations Framework forces disciplined Go/No-Go decisions before hundreds of hours are spent." },
              { t: "Ethics over shortcuts", d: "No success-based fees. No offshore AI. No shortcuts that put your organization at risk." },
              { t: "Human expertise, AI-augmented", d: "AI accelerates identification and analysis — but every narrative is authored by an experienced human." },
              { t: "Judgment Over Volume", d: "We focus on the opportunities worth pursuing—and advise against those that aren't." },
            ].map((v) => (
              <GlassCard key={v.t}>
                <div className="text-sm font-semibold text-foreground">{v.t}</div>
                <p className="mt-2 text-sm text-muted leading-relaxed">{v.d}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* STATS */}
      <Section>
        <div className="glass rounded-3xl p-10 md:p-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <Stat value={site.totalSecured} label="Total funding secured" />
          <Stat value="500+" label="Organizations served" />
          <Stat value="60+" label="Experts, including 15 PhDs" />
          <Stat value={`${site.yearsExperience}+`} label={`Years since ${site.founded}`} />
        </div>
      </Section>

      {/* TIMELINE */}
      <Section>
        <SectionTitle
          eyebrow="Our story"
          title={<>Fifteen years. <span className="text-gradient-brand">$2.5 billion. And counting.</span></>}
        />
        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-glow/50 via-sapphire/30 to-transparent md:-translate-x-1/2" aria-hidden />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <div key={t.year} className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                <div className={`md:[direction:ltr] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="text-xs font-mono text-cyan-300">{t.year}</div>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{t.body}</p>
                </div>
                <div className={`absolute left-4 md:left-1/2 top-1 md:-translate-x-1/2 w-3 h-3 rounded-full bg-cyan-glow shadow-[0_0_20px_rgba(0,240,255,0.6)]`} aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CERTS */}
      <Section>
        <div className="glass rounded-3xl p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Eyebrow>Certifications</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-foreground">
                Certified <span className="text-gradient-gold">Women-Owned</span> Small Business.
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                GMA is a federally certified Women-Owned Small Business (WOSB) and a registered NWBOC Women's Business Enterprise —
                supporting your supplier diversity, small-business set-aside, and community benefits goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {site.certifications.map((c) => (
                <div key={c} className="glass rounded-2xl p-6 text-center">
                  <div className="text-3xl">🏛️</div>
                  <div className="mt-3 text-sm font-semibold text-foreground">{c.split(" — ")[0]}</div>
                  <div className="mt-1 text-xs text-muted">{c.split(" — ")[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <CTACard
          title="Work with the team that's secured $2.5B+."
          subtitle="Whether you're pursuing your first federal award or your fiftieth, we'd love to help."
          primary={{ label: "Start with an assessment", href: "/assessment" }}
          secondary={{ label: "See open roles", href: "/careers" }}
        />
      </Section>
    </>
  );
}
