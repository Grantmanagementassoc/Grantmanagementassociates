import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, GlassCard, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";
import { services, industries, caseStudies } from "@/lib/content";

export const metadata: Metadata = { 
  title: "Sitemap",
  description: "Complete overview of all pages, services, industries, case studies, articles, and newsletters on Grant Management Associates.",
};

const newsletterSlugs = [
  { slug: "weekly-funding-digest-nov-2-6-2026", title: "Nov 2–6, 2026" },
  { slug: "weekly-funding-digest-oct-26-30-2026", title: "Oct 26–30, 2026" },
  { slug: "weekly-funding-digest-oct-19-23-2026", title: "Oct 19–23, 2026" },
  { slug: "weekly-funding-digest-oct-12-16-2026", title: "Oct 12–16, 2026" },
  { slug: "weekly-funding-digest-oct-5-9-2026", title: "Oct 5–9, 2026" },
  { slug: "weekly-funding-digest-sept-28-oct-2-2026", title: "Sept 28–Oct 2, 2026" },
  { slug: "weekly-funding-digest-sept-21-25-2026", title: "Sept 21–25, 2026" },
  { slug: "weekly-funding-digest-sept-14-18-2026", title: "Sept 14–18, 2026" },
  { slug: "weekly-funding-digest-sept-7-11-2026", title: "Sept 7–11, 2026" },
  { slug: "weekly-funding-digest-aug-31-sept-4-2026", title: "Aug 31–Sept 4, 2026" },
  { slug: "weekly-funding-digest-aug-24-28-2026", title: "Aug 24–28, 2026" },
  { slug: "weekly-funding-digest-aug-17-21-2026", title: "Aug 17–21, 2026" },
];

export default function SitemapPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden noise">
        <BackgroundGrid />
        <div className="relative mx-auto max-w-4xl px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sitemap" }]} />
          <Eyebrow>Sitemap</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-foreground leading-[1.02]">Everything, in one place.</h1>
        </div>
      </section>

      <Section className="max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Company</div>
            <ul className="mt-4 space-y-2">
              {[
                ["/", "Home"],
                ["/about/firm", "Our Firm"],
                ["/about/team", "Our Team"],
                ["/about/clients", "Our Clients"],
                ["/careers", "Careers (Join our network)"],
                ["/partners", "Partners"],
                ["/contact", "Contact Us"],
              ].map(([href, label]) => (
                <li key={href}><Link className="text-muted hover:text-foreground" href={href}>{label}</Link></li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Services</div>
            <ul className="mt-4 space-y-2">
              <li><Link className="text-muted hover:text-foreground font-medium" href="/services">All services overview</Link></li>
              {services.map((s) => (
                <li key={s.slug}><Link className="text-muted hover:text-foreground" href={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Industries</div>
            <ul className="mt-4 space-y-2">
              <li><Link className="text-muted hover:text-foreground font-medium" href="/industries">All industries overview</Link></li>
              {industries.map((i) => (
                <li key={i.slug}><Link className="text-muted hover:text-foreground" href={`/industries/${i.slug}`}>{i.name}</Link></li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Results & Case Studies</div>
            <ul className="mt-4 space-y-2">
              <li><Link className="text-muted hover:text-foreground font-medium" href="/results">All Signature Results</Link></li>
              <li><Link className="text-muted hover:text-foreground font-medium" href="/case-studies">Featured Case Studies</Link></li>
              {caseStudies.map((c) => (
                <li key={c.slug}><Link className="text-muted hover:text-foreground" href={`/case-studies/${c.slug}`}>{c.client}</Link></li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Intelligence & Articles</div>
            <ul className="mt-4 space-y-2">
              <li><Link className="text-muted hover:text-foreground font-medium" href="/articles">All 90+ Articles & Insights</Link></li>
              <li><Link className="text-muted hover:text-foreground font-medium" href="/newsletters">Weekly Funding Digests</Link></li>
              {newsletterSlugs.slice(0, 5).map((n) => (
                <li key={n.slug}>
                  <Link className="text-muted hover:text-foreground text-sm" href={`/newsletters/${n.slug}`}>
                    Weekly Digest: {n.title}
                  </Link>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Tools & Legal</div>
            <ul className="mt-4 space-y-2">
              {[
                ["/methodology", "KCA Methodology & Guide"],
                ["/assessment", "2-Min Funding Assessment"],
                ["/responsible-ai", "Responsible AI Commitment"],
                ["/privacy-policy", "Privacy Policy"],
                ["/cookie-policy", "Cookie Policy"],
                ["/terms", "Terms of Service"],
                ["/accessibility", "Accessibility Statement"],
              ].map(([href, label]) => (
                <li key={href}><Link className="text-muted hover:text-foreground" href={href}>{label}</Link></li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </Section>
    </>
  );
}
