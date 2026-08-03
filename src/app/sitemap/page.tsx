import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, GlassCard, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";
import { services, industries, caseStudies, resources, openRoles } from "@/lib/content";

export const metadata: Metadata = { title: "Sitemap" };

export default function SitemapPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden noise">
        <BackgroundGrid />
        <div className="relative mx-auto max-w-4xl px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sitemap" }]} />
          <Eyebrow>Sitemap</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-[1.02]">Everything, in one place.</h1>
        </div>
      </section>

      <Section className="max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Company</div>
            <ul className="mt-4 space-y-2">
              {[["/", "Home"], ["/about", "About"], ["/careers", "Careers"], ["/partners", "Partners"], ["/contact", "Contact"]].map(([href, label]) => (
                <li key={href}><Link className="text-slate-300 hover:text-white" href={href}>{label}</Link></li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Services</div>
            <ul className="mt-4 space-y-2">
              <li><Link className="text-slate-300 hover:text-white" href="/services">All services</Link></li>
              {services.map((s) => (
                <li key={s.slug}><Link className="text-slate-300 hover:text-white" href={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Industries</div>
            <ul className="mt-4 space-y-2">
              <li><Link className="text-slate-300 hover:text-white" href="/industries">All industries</Link></li>
              {industries.map((i) => (
                <li key={i.slug}><Link className="text-slate-300 hover:text-white" href={`/industries/${i.slug}`}>{i.name}</Link></li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Case Studies</div>
            <ul className="mt-4 space-y-2">
              <li><Link className="text-slate-300 hover:text-white" href="/case-studies">All case studies</Link></li>
              {caseStudies.map((c) => (
                <li key={c.slug}><Link className="text-slate-300 hover:text-white" href={`/case-studies/${c.slug}`}>{c.client}</Link></li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Resources</div>
            <ul className="mt-4 space-y-2">
              <li><Link className="text-slate-300 hover:text-white" href="/resources">All resources</Link></li>
              {resources.map((r) => (
                <li key={r.slug}><Link className="text-slate-300 hover:text-white" href={`/resources/${r.slug}`}>{r.title}</Link></li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Tools & Legal</div>
            <ul className="mt-4 space-y-2">
              {[["/assessment", "Funding Assessment"], ["/responsible-ai", "Responsible AI"], ["/privacy-policy", "Privacy Policy"], ["/terms", "Terms of Service"], ["/accessibility", "Accessibility"]].map(([href, label]) => (
                <li key={href}><Link className="text-slate-300 hover:text-white" href={href}>{label}</Link></li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Open Roles</div>
            <ul className="mt-4 space-y-2">
              {openRoles.map((r) => (
                <li key={r.slug}><Link className="text-slate-300 hover:text-white" href={`/careers/${r.slug}`}>{r.title}</Link></li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </Section>
    </>
  );
}
