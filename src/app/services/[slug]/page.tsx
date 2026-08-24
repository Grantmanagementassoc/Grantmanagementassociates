import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionTitle, Eyebrow, GlassCard, Breadcrumbs, CTACard, Accordion, BackgroundGrid } from "@/components/site/ui";
import { services } from "@/lib/content";
import * as Icons from "lucide-react";

type Params = { slug: string };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return { title: "Service" };
  return { title: s.title, description: s.tagline };
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((x) => x.slug === slug);
  if (!service) return notFound();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-[1600px] px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} />
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
            <div>
            <div className="text-cyan-400">
              {(() => {
                const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ElementType;
                return IconComponent ? <IconComponent size={56} strokeWidth={1.5} /> : null;
              })()}
            </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-foreground leading-[0.98]">{service.title}</h1>
              <p className="mt-6 text-lg text-cyan-300">{service.tagline}</p>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">{service.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Start a conversation →</Link>
                <Link href="/assessment" className="btn-secondary">Take the assessment</Link>
              </div>
            </div>
            <div className="grid gap-3">
              <GlassCard>
                <div className="text-xs uppercase tracking-widest text-muted">Typical timeline</div>
                <div className="mt-2 text-xl font-semibold text-foreground">{service.timeline}</div>
              </GlassCard>
              <GlassCard>
                <div className="text-xs uppercase tracking-widest text-muted">Outcomes</div>
                <ul className="mt-2 space-y-1.5 text-sm text-muted">
                  {service.outcomes.map((o) => (
                    <li key={o} className="flex gap-2"><span className="text-cyan-300">▸</span>{o}</li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {service.contentHtml ? (
        <Section>
          <div className="glass rounded-3xl p-8 md:p-14 border border-glass-border">
            <article 
              className="prose dark:prose-invert prose-lg max-w-none 
              prose-p:text-muted prose-p:leading-relaxed 
              prose-headings:text-foreground prose-headings:font-semibold 
              prose-strong:text-foreground prose-strong:font-semibold 
              prose-ul:grid md:prose-ul:grid-cols-2 prose-ul:gap-6 prose-ul:list-none prose-ul:pl-0 
              prose-li:bg-black/5 dark:prose-li:bg-white/5 prose-li:border prose-li:border-glass-border prose-li:rounded-2xl prose-li:p-6 prose-li:m-0 hover:prose-li:border-cyan-500/30 prose-li:transition-colors
              prose-table:w-full prose-table:rounded-2xl prose-table:overflow-hidden prose-table:border-collapse prose-table:shadow-lg 
              prose-th:bg-black/5 dark:prose-th:bg-white/10 prose-th:p-4 prose-th:text-foreground prose-th:font-semibold prose-th:border-glass-border 
              prose-td:p-4 prose-td:border-glass-border prose-td:text-muted
              prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border prose-img:border-glass-border
              [&_a.btn-primary]:!bg-gradient-to-r [&_a.btn-primary]:!from-cyan-500 [&_a.btn-primary]:!to-blue-600 [&_a.btn-primary]:!text-white [&_a.btn-primary]:!border-none [&_a.btn-primary]:!shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:[&_a.btn-primary]:!shadow-[0_0_40px_rgba(0,240,255,0.6)] hover:[&_a.btn-primary]:!scale-105 [&_a.btn-primary]:transition-all [&_a.btn-primary]:duration-300 [&_a.btn-primary]:!px-8 [&_a.btn-primary]:!py-4 [&_a.btn-primary]:!rounded-full [&_a.btn-primary]:!font-semibold [&_a.btn-primary]:!tracking-wide
              [&_a]:not(.btn-primary):text-cyan-600 hover:[&_a]:not(.btn-primary):text-cyan-500 dark:[&_a]:not(.btn-primary):text-cyan-400 dark:hover:[&_a]:not(.btn-primary):text-cyan-300"
              dangerouslySetInnerHTML={{ __html: service.contentHtml }}
            />
          </div>
        </Section>
      ) : (
        <>
          <Section>
        <SectionTitle eyebrow="Our approach" title={<>How we deliver <span className="text-gradient-brand">{service.title}</span>.</>} />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {service.process.map((step, i) => (
            <GlassCard key={step.title}>
              <div className="font-mono text-xs text-cyan-300">STEP {String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{step.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-muted">Deliverables</div>
            <ul className="mt-4 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-glow shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-muted">FAQ</div>
            <div className="mt-2">
              <Accordion items={service.faq} />
            </div>
          </GlassCard>
        </div>
      </Section>
        </>
      )}

      <Section>
        <SectionTitle eyebrow="Related services" title="You might also need." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} href={`/services/${r.slug}`} className="group">
              <GlassCard className="h-full">
                <div className="text-cyan-400">
                  {(() => {
                    const IconComponent = Icons[r.icon as keyof typeof Icons] as React.ElementType;
                    return IconComponent ? <IconComponent size={24} strokeWidth={1.5} /> : null;
                  })()}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-cyan-300 transition-colors">{r.title}</h3>
                <p className="mt-2 text-sm text-muted">{r.tagline}</p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <CTACard
          title="Ready to start?"
          subtitle="Every engagement begins with a free 30-minute strategy call."
          primary={{ label: "Book a call", href: "/contact" }}
          secondary={{ label: "Take assessment", href: "/assessment" }}
        />
      </Section>
    </>
  );
}
