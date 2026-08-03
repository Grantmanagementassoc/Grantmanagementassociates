import { Section, Eyebrow, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";
import type { ReactNode } from "react";

export function LegalPage({
  title,
  eyebrow,
  updated,
  sections,
  breadcrumb,
}: {
  title: string;
  eyebrow: string;
  updated: string;
  sections: { heading: string; body: ReactNode }[];
  breadcrumb: string;
}) {
  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: breadcrumb }]} />
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white leading-[1.02]">{title}</h1>
          <p className="mt-4 text-sm text-slate-400">Last updated: {updated}</p>
        </div>
      </section>

      <Section className="max-w-4xl !pt-8">
        <div className="glass rounded-2xl p-6 mb-8">
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">Contents</div>
          <ol className="space-y-1.5">
            {sections.map((s, i) => (
              <li key={i}>
                <a href={`#s${i}`} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-12">
          {sections.map((s, i) => (
            <div key={i} id={`s${i}`}>
              <h2 className="text-2xl font-semibold text-white">{i + 1}. {s.heading}</h2>
              <div className="mt-4 text-slate-300 leading-relaxed space-y-4">{s.body}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
