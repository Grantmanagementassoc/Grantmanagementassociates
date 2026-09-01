import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
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

function enhanceHtml(html: string | undefined) {
  if (!html) return html;
  
  // Transform "STEP 01 - Title" into vertical flowchart items
  let enhanced = html.replace(
    /<p><strong>(STEP \d+[^<]*?)<\/strong><\/p>\s*<p>(.*?)<\/p>/gi,
    (match, title, body) => {
      return `<div class="relative pl-8 md:pl-12 border-l-2 border-cyan-800 pb-8 last:pb-0 mt-6"><div class="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(0,240,255,0.6)]"></div><h3 class="text-xl font-semibold text-cyan-300 mb-3">${title}</h3><p class="text-muted leading-relaxed text-lg">${body}</p></div>`;
    }
  );

  // Upgrade section headers
  enhanced = enhanced.replace(
    /<p><strong>(OUR APPROACH|DELIVERABLES|FAQ|WHY GMA|RESULTS &amp; EXPERIENCE|RELATED SERVICES)<\/strong><\/p>/gi,
    `<h2 class="text-3xl font-bold text-foreground mt-16 mb-8 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text tracking-tight">$1</h2>`
  );
  
  // Clean up remaining <p><strong> titles to look like section subheadings
  enhanced = enhanced.replace(
    /<p><strong>([^<]*?)<\/strong><\/p>/g,
    (match, text) => {
      // Don't format the very first intro lines that were bolded
      if (text.includes("Proposals that compete") || text.includes("Build a stronger foundation") || text.includes("Grant Writing & Management")) return match;
      return `<h3 class="text-xl font-semibold text-foreground mt-8 mb-3">${text}</h3>`;
    }
  );

  // Upgrade lists to GlassCards
  enhanced = enhanced.replace(
    /<ul>([\s\S]*?)<\/ul>/gi,
    `<ul class="grid md:grid-cols-2 gap-4 list-none pl-0 mt-6">$1</ul>`
  );
  enhanced = enhanced.replace(
    /<li>(.*?)<\/li>/gi,
    `<li class="glass p-5 rounded-xl flex items-start gap-3 border border-glass-border"><span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_10px_#00f0ff]"></span><span class="text-muted">${"$1".replace(/<br\s*\/?>/g, '')}</span></li>`
  );

  return enhanced;
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((x) => x.slug === slug);
  if (!service) return notFound();

  const enhancedHtml = enhanceHtml(service.contentHtml);

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
        {service.image && (
          <Image src={service.image} alt="Background" fill className="object-cover opacity-10 absolute inset-0 z-[-1] pointer-events-none mix-blend-luminosity" priority />
        )}
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
                <Link href="/contact" className="btn-primary">Start a conversation +'</Link>
                <Link href="/assessment" className="btn-secondary">Take the assessment</Link>
              </div>
            </div>
            {service.timeline && service.outcomes && (
              <div className="grid gap-3">
                <GlassCard>
                  <div className="text-xs uppercase tracking-widest text-muted">Typical timeline</div>
                  <div className="mt-2 text-xl font-semibold text-foreground">{service.timeline}</div>
                </GlassCard>
                <GlassCard>
                  <div className="text-xs uppercase tracking-widest text-muted">Outcomes</div>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted">
                    {service.outcomes.map((o) => (
                      <li key={o} className="flex gap-2"><span className="text-cyan-300">-,</span>{o}</li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            )}
          </div>
        </div>
      </section>

      {enhancedHtml && (
        <Section>
          <div className="glass rounded-3xl p-8 md:p-14 border border-glass-border">
            <article 
              className="prose dark:prose-invert prose-lg max-w-none 
              prose-p:text-muted prose-p:leading-relaxed 
              prose-headings:text-foreground prose-headings:font-semibold 
              prose-strong:text-foreground prose-strong:font-semibold 
              [&_a.btn-primary]:!bg-gradient-to-r [&_a.btn-primary]:!from-cyan-500 [&_a.btn-primary]:!to-blue-600 [&_a.btn-primary]:!text-white [&_a.btn-primary]:!border-none [&_a.btn-primary]:!shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:[&_a.btn-primary]:!shadow-[0_0_40px_rgba(0,240,255,0.6)] hover:[&_a.btn-primary]:!scale-105 [&_a.btn-primary]:transition-all [&_a.btn-primary]:duration-300 [&_a.btn-primary]:!px-8 [&_a.btn-primary]:!py-4 [&_a.btn-primary]:!rounded-full [&_a.btn-primary]:!font-semibold [&_a.btn-primary]:!tracking-wide [&_a.btn-primary]:!no-underline
              [&_a]:not(.btn-primary):text-cyan-600 hover:[&_a]:not(.btn-primary):text-cyan-500 dark:[&_a]:not(.btn-primary):text-cyan-400 dark:hover:[&_a]:not(.btn-primary):text-cyan-300"
              dangerouslySetInnerHTML={{ __html: enhancedHtml }}
            />
          </div>
        </Section>
      )}

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
