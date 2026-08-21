import Link from "next/link";
import { Section, SectionTitle, Eyebrow, GlassCard, Stat, Accordion, CTACard, BackgroundGrid } from "@/components/site/ui";
import { LogoTicker } from "@/components/site/logo-ticker";
import { services, industries, caseStudies, resources, testimonials, site } from "@/lib/content";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import * as Icons from "lucide-react";

export default async function HomePage() {
  const featuredStudies = caseStudies.slice(0, 4);
  const latestPosts = resources.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-cyan-glow/10 blur-[80px] pointer-events-none animate-float" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Eyebrow>AI-Powered Grant Matching · Go/No-Go Strategy · Proposal Execution</Eyebrow>

            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[0.95] tracking-tight animate-fade-up">
              Funding intelligence.
              <br />
              <span className="text-gradient-brand">Winning strategy.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "120ms" }}>
              GMA has helped organizations secure over{" "}
              <span className="text-foreground font-medium">{site.totalSecured}</span> in federal, state, and foundation
              funding since {site.founded}.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
              <Link href="/assessment" className="btn-primary">Take the 2-min assessment →</Link>
              <Link href="/case-studies" className="btn-secondary">See how we win</Link>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-3xl mx-auto">
              <Stat value={site.totalSecured} label="Secured for clients" />
              <Stat value={site.activePrograms} label="Programs tracked" />
              <Stat value={`${site.yearsExperience}+`} label="Years in practice" />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGO TICKER */}
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-widest text-muted mb-6">
          Trusted by organizations at every scale
        </p>
        <LogoTicker />
      </div>

      {/* SERVICES BENTO */}
      <Section id="services">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionTitle
            eyebrow="Services"
            title={<>The full grants stack — <span className="text-gradient-brand">from match to close-out</span>.</>}
            subtitle="AI-matched pipeline, disciplined Go/No-Go, expert-written proposals, and post-award management."
          />
          <Link href="/services" className="btn-ghost">All services →</Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 md:auto-rows-fr">
          {/* Featured large card */}
          <Link href={`/services/${services[0].slug}`} className="md:col-span-2 md:row-span-2 group">
            <div className="glass card-hover rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sapphire/15 blur-3xl pointer-events-none" aria-hidden />
              <div className="relative">
                <div className="text-cyan-400">
                  {(() => {
                    const IconComponent = Icons[services[0].icon as keyof typeof Icons] as React.ElementType;
                    return IconComponent ? <IconComponent size={40} strokeWidth={1.5} /> : null;
                  })()}
                </div>
                <h3 className="mt-6 text-3xl md:text-4xl font-semibold text-foreground">{services[0].title}</h3>
                <p className="mt-4 text-muted max-w-lg leading-relaxed">{services[0].summary}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-2 text-cyan-300 font-medium">
                Explore <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>

          {services.slice(1, 5).map((s) => {
            const IconComponent = Icons[s.icon as keyof typeof Icons] as React.ElementType;
            return (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                <GlassCard className="h-full flex flex-col justify-between">
                  <div>
                    <div className="text-cyan-400">
                      {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">{s.tagline}</p>
                  </div>
                <div className="mt-4 text-xs text-cyan-300 font-medium flex items-center gap-1">
                  Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </GlassCard>
            </Link>
            );
          })}
        </div>
      </Section>

      {/* METHODOLOGY */}
      <Section>
        <SectionTitle
          eyebrow="Methodology"
          title={<>A repeatable process for <span className="text-gradient-brand">consistent success</span>.</>}
          subtitle="Every engagement follows a disciplined four-phase methodology refined across 15+ years and thousands of submissions."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {[
            { n: "01", t: "Match", d: "AI + analysts identify your best-fit programs across 10,000+ live opportunities." },
            { n: "02", t: "Decide", d: "The Key Considerations Framework scores 22 factors before you commit resources." },
            { n: "03", t: "Execute", d: "Compliance matrix, technical narrative, budget, red-team review, clean submission." },
            { n: "04", t: "Manage", d: "Post-award reporting, drawdowns, audit prep, and continuous portfolio strategy." },
          ].map((step, i) => (
            <div key={step.n} className="glass rounded-2xl p-6 relative">
              <div className="text-xs font-mono text-cyan-300">{step.n}</div>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{step.t}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{step.d}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionTitle
            eyebrow="Signature wins"
            title={<>Real dollars. <span className="text-gradient-brand">Real transformation.</span></>}
            subtitle="A sample of the awards GMA has helped clients secure across energy, manufacturing, transit, and tech."
          />
          <Link href="/case-studies" className="btn-ghost">All case studies →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredStudies.map((cs) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group">
              <GlassCard className="h-full">
                <div className="flex flex-col h-full justify-between gap-4">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-muted">{cs.type} · {cs.year}</div>
                        <h3 className="mt-2 text-xl font-semibold text-foreground group-hover:text-cyan-300 transition-colors line-clamp-2">{cs.client}</h3>
                        <p className="mt-2 text-sm text-muted line-clamp-1">{cs.agency}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-3xl md:text-4xl font-semibold text-gradient-gold">{cs.amount}</div>
                        <div className="text-[10px] uppercase tracking-widest text-muted mt-1">awarded</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs text-cyan-300 font-medium">
                    Read the case study <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      {/* RESPONSIBLE AI */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-glass-border bg-gradient-to-br from-ink-900 to-black p-10 md:p-14">
          <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" aria-hidden />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-glow/10 blur-3xl" aria-hidden />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow>Responsible AI</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground leading-tight">
                Ethical AI. Human expertise. <span className="text-gradient-brand">Uncompromising security.</span>
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                We never route your sensitive information to offshore tools like DeepSeek. GMA uses only proven,
                U.S.-based AI partners — always intentionally, always transparently, always to enhance (not replace)
                human judgment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/responsible-ai" className="btn-primary">Read our AI commitment</Link>
                <Link href="/contact" className="btn-secondary">Discuss your security concerns</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { t: "U.S.-based partners only", d: "No offshore processing, ever." },
                { t: "SOC 2 compliant", d: "Enterprise-grade security controls." },
                { t: "Human-in-the-loop", d: "AI assists — experts decide." },
                { t: "Client data ownership", d: "Your IP stays yours." },
              ].map((f) => (
                <div key={f.t} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                  <div className="text-sm font-semibold text-white">{f.t}</div>
                  <div className="mt-2 text-xs text-white/70 leading-relaxed">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionTitle
            eyebrow="Industries"
            title={<>Deep expertise across <span className="text-gradient-brand">every funded sector</span>.</>}
            subtitle="Sector-specialist teams — not generalists — bring domain knowledge from day one."
          />
          <Link href="/industries" className="btn-ghost">All industries →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 8).map((ind) => {
            const IconComponent = Icons[ind.icon as keyof typeof Icons] as React.ElementType;
            return (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group">
                <GlassCard className="h-full">
                  <div className="text-cyan-400">
                    {IconComponent && <IconComponent size={32} strokeWidth={1.5} />}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{ind.name}</h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed line-clamp-2">{ind.blurb}</p>
                </GlassCard>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-14">
          <SectionTitle
            eyebrow="What clients say"
            title={<>Trusted at the <span className="text-gradient-brand">highest-stakes moments</span>.</>}
            align="center"
          />
        </div>
        
        <div className="relative w-full overflow-hidden flex">
          {/* Fading edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="glass rounded-2xl p-8 flex flex-col justify-between w-[350px] md:w-[400px] shrink-0">
                <div>
                  <div className="text-3xl text-cyan-300 leading-none">&ldquo;</div>
                  <p className="mt-4 text-muted leading-relaxed text-sm line-clamp-6">{t.quote}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/5">
                  <div className="text-sm font-semibold text-foreground">{t.author}</div>
                  <div className="text-xs text-muted mt-1 line-clamp-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS */}
      <Section className="!py-12 md:!py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionTitle
            eyebrow="Insights"
            title={<>Latest <span className="text-gradient-brand">funding intelligence</span>.</>}
            subtitle="Original research, opportunity briefings, and grantmaking playbooks from the GMA team."
          />
          <Link href="/resources" className="btn-ghost">All resources →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((r) => (
            <Link key={r.slug} href={`/resources/${r.slug}`} className="group">
              <GlassCard className="h-full flex flex-col">
                <div className="text-[11px] uppercase tracking-widest text-cyan-300">{r.category}</div>
                <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-cyan-300 transition-colors leading-tight">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">{r.excerpt}</p>
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-black/5 dark:border-white/5 text-xs text-muted flex justify-between">
                  <span>{new Date(r.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span>{r.readMinutes} min read</span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!py-12 md:!py-16">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <SectionTitle eyebrow="FAQ" title="Answers before you ask." />
          </div>
          <Accordion
            items={[
              { q: "What's your average engagement size?", a: "Federal proposals typically run $25K–$150K per submission depending on complexity. Retainers and alliances are custom-scoped." },
              { q: "Do you work success-based?", a: "No — success-based grant fees are discouraged by most federal agencies and misalign incentives. We work fixed-fee or hourly." },
              { q: "How fast can you start?", a: "Kickoff within 5 business days for standard engagements. Rush engagements available for shovel-ready proposals." },
              { q: "Where is my data processed?", a: "Exclusively on U.S.-based, SOC 2 infrastructure. No offshore AI tools, ever. See our Responsible AI page." },
              { q: "Do you handle post-award management?", a: "Yes — Federal Financial Reports, performance reports, drawdowns, and audit prep. Many clients retain us for the full award lifecycle." },
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CTACard
          title="Start with a 2-minute assessment."
          subtitle="Answer a few questions and we'll return a personalized funding potential score plus recommended next steps — no obligation, no sales call unless you request one."
          primary={{ label: "Take the assessment →", href: "/assessment" }}
          secondary={{ label: "Book a strategy call", href: "/contact" }}
        />
      </Section>
    </>
  );
}
