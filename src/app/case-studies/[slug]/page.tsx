import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Eyebrow, GlassCard, Breadcrumbs, CTACard, BackgroundGrid } from "@/components/site/ui";
import { caseStudies, industries } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return { title: "Case Study" };
  return { title: `${c.client} — ${c.amount}`, description: c.challenge };
}

export default async function CaseStudyDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cs = caseStudies.find((x) => x.slug === slug);
  if (!cs) return notFound();
  const ind = industries.find((i) => i.slug === cs.industry);
  const related = caseStudies.filter((c) => c.slug !== cs.slug && c.industry === cs.industry).slice(0, 2);

  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-gold-glow/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }, { label: cs.client }]} />
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-glass-border bg-black/5 dark:bg-white/5 text-muted">{cs.type}</span>
                {cs.year && <span className="text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-glass-border bg-black/5 dark:bg-white/5 text-muted">{cs.year}</span>}
                {ind && <Link href={`/industries/${ind.slug}`} className="text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-glass-border bg-black/5 dark:bg-white/5 text-cyan-300 hover:bg-white/10">{ind.name}</Link>}
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-foreground leading-[1.02]">{cs.client}</h1>
              <p className="mt-4 text-lg text-muted">{cs.agency}</p>
            </div>
            <GlassCard hover={false} className="text-center md:text-right">
              <div className="text-xs uppercase tracking-widest text-muted">Awarded</div>
              <div className="mt-2 text-5xl md:text-6xl font-semibold text-gradient-gold">{cs.amount}</div>
            </GlassCard>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard hover={false}>
            <Eyebrow>Challenge</Eyebrow>
            <p className="mt-4 text-muted leading-relaxed">{cs.challenge}</p>
          </GlassCard>
          <GlassCard hover={false}>
            <Eyebrow>Approach</Eyebrow>
            <p className="mt-4 text-muted leading-relaxed">{cs.approach || cs.solution}</p>
          </GlassCard>
          <GlassCard hover={false}>
            <Eyebrow>Result</Eyebrow>
            <p className="mt-4 text-muted leading-relaxed">{cs.result || cs.outcome}</p>
          </GlassCard>
        </div>
      </Section>

      {cs.quote && (
        <Section>
          <div className="glass rounded-3xl p-10 md:p-14 max-w-4xl mx-auto text-center">
            <div className="text-5xl text-cyan-300">&ldquo;</div>
            <p className="mt-4 text-2xl md:text-3xl text-foreground leading-snug font-display">{cs.quote.text}</p>
            <div className="mt-6 text-sm text-muted">— {cs.quote.author}, {cs.quote.role}</div>
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Related case studies</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} href={`/case-studies/${r.slug}`} className="group">
                <GlassCard>
                  <div className="flex justify-between">
                    <div>
                      {r.year && <div className="text-xs uppercase tracking-widest text-muted">{r.year}</div>}
                      <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-cyan-300">{r.client}</h3>
                    </div>
                    <div className="text-xl font-semibold text-gradient-gold">{r.amount}</div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <CTACard
          title="Achieve similar results."
          subtitle="We'd love to talk about what winning looks like for your organization."
          primary={{ label: "Take the assessment", href: "/assessment" }}
          secondary={{ label: "Contact us", href: "/contact" }}
        />
      </Section>
    </>
  );
}
