import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle, Eyebrow, GlassCard, Breadcrumbs, CTACard, BackgroundGrid } from "@/components/site/ui";
import { openRoles, site } from "@/lib/content";
import { CareerForm } from "@/components/forms/career-form";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join the GMA team — architects of ${site.totalSecured} in secured funding.`,
};

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-[1600px] px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />
          <div className="max-w-3xl">
            <Eyebrow>Careers</Eyebrow>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-foreground leading-[0.98]">
              Join the team that's secured <br /><span className="text-gradient-gold">{site.totalSecured}.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
              Remote-first. Ethics-first. Impact-first. If you care about funding the future, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>



      <Section>
        <SectionTitle eyebrow="Open roles" title="We're hiring." />
        <div className="mt-10 grid gap-4">
          {openRoles.map((r) => (
            <Link key={r.slug} href={`/careers/${r.slug}`} className="group">
              <div className="glass card-hover rounded-2xl p-6 grid md:grid-cols-[1.4fr_1fr_1fr_auto] items-center gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-cyan-300">{r.dept}</div>
                  <div className="mt-1 text-lg font-semibold text-foreground group-hover:text-cyan-300 transition-colors">{r.title}</div>
                </div>
                <div className="text-sm text-muted">{r.location}</div>
                <div className="text-sm text-muted">{r.type}</div>
                <div className="text-cyan-300 text-sm justify-self-start md:justify-self-end">View role →</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <CareerForm />
      </Section>
    </>
  );
}
