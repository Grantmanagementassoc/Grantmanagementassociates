import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Eyebrow, GlassCard, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";
import { openRoles } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams() {
  return openRoles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const r = openRoles.find((x) => x.slug === slug);
  if (!r) return { title: "Role" };
  return { title: r.title };
}

export default async function CareerDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const role = openRoles.find((x) => x.slug === slug);
  if (!role) return notFound();

  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers", href: "/careers" }, { label: role.title }]} />
          <Eyebrow>{role.dept}</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-[1.02]">{role.title}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200">{role.location}</span>
            <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-200">{role.type}</span>
          </div>
        </div>
      </section>

      <Section className="max-w-4xl !pt-8">
        <div className="grid gap-6">
          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">Role summary</div>
            <p className="mt-3 text-slate-200 leading-relaxed">
              As a {role.title} at GMA, you'll partner with our clients and internal experts to architect and execute winning grant strategies.
              This is a high-ownership seat on a lean, mission-driven team.
            </p>
          </GlassCard>
          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">You will</div>
            <ul className="mt-3 space-y-2 text-slate-200">
              {["Lead client-facing engagements from kickoff to submission.", "Author or oversee technical narratives and budgets.", "Collaborate with subject-matter experts and internal delivery leads.", "Contribute to GMA's methodology and internal knowledge base."].map((b) => (
                <li key={b} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-glow shrink-0" />{b}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard hover={false}>
            <div className="text-xs uppercase tracking-widest text-cyan-300">You bring</div>
            <ul className="mt-3 space-y-2 text-slate-200">
              {["5+ years of federal grants experience (or equivalent).", "Exceptional writing and analytical rigor.", "Comfort translating technical concepts for non-expert reviewers.", "A collaborative, ethics-first orientation."].map((b) => (
                <li key={b} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-glow shrink-0" />{b}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">Apply for this role →</Link>
          <Link href="/careers" className="btn-secondary">All open roles</Link>
        </div>
      </Section>
    </>
  );
}
