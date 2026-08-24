import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionTitle, Eyebrow, GlassCard, Breadcrumbs, CTACard, BackgroundGrid } from "@/components/site/ui";
import { industries, caseStudies } from "@/lib/content";
import * as Icons from "lucide-react";

type Params = { slug: string };

export async function generateStaticParams() {
  return industries.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) return { title: "Industry" };
  return { title: i.name, description: i.blurb };
}

export default async function IndustryDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const ind = industries.find((x) => x.slug === slug);
  if (!ind) return notFound();
  const related = caseStudies.filter((c) => c.industry === ind.slug);

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-sapphire/15 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-[1600px] px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: ind.name }]} />
          <div className="max-w-3xl">
            <div className="text-cyan-400">
              {(() => {
                const IconComponent = Icons[ind.icon as keyof typeof Icons] as React.ElementType;
                return IconComponent ? <IconComponent size={64} strokeWidth={1.5} /> : null;
              })()}
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-foreground leading-tight">{ind.name}</h1>
            <p className="mt-6 text-xl text-cyan-300">{ind.blurb}</p>
            <p className="mt-6 text-lg text-muted leading-relaxed">{ind.detail}</p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-4">
          {ind.stats.map((s) => (
            <GlassCard key={s.label}>
              <div className="text-3xl font-semibold text-gradient-gold">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted">{s.label}</div>
            </GlassCard>
          ))}
          <GlassCard>
            <div className="text-xs uppercase tracking-widest text-muted">Primary agencies</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {ind.agencies.map((a) => (
                <span key={a} className="text-xs px-2.5 py-1 rounded-full border border-glass-border bg-black/5 dark:bg-white/5 text-muted">{a}</span>
              ))}
            </div>
          </GlassCard>
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <SectionTitle eyebrow="Case studies" title={<>Recent wins in <span className="text-gradient-brand">{ind.name}</span>.</>} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {related.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group">
                <GlassCard>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted">{cs.year} · {cs.agency}</div>
                      <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-cyan-300">{cs.client}</h3>
                    </div>
                    <div className="text-2xl font-semibold text-gradient-gold">{cs.amount}</div>
                  </div>
                  <p className="mt-3 text-sm text-muted line-clamp-2">{cs.challenge}</p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <CTACard
          title={`Ready to pursue funding in ${ind.name}?`}
          subtitle="Every engagement begins with a free 30-minute strategy call."
          primary={{ label: "Book a call", href: "/contact" }}
          secondary={{ label: "Take assessment", href: "/assessment" }}
        />
      </Section>
    </>
  );
}
