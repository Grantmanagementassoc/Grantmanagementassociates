import type { Metadata } from "next";
import { Section, Eyebrow, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";
import { AssessmentForm } from "./assessment-form";

export const metadata: Metadata = {
  title: "Free Funding Assessment",
  description: "Get a personalized funding potential score and recommended next steps in 2 minutes — no obligation.",
};

export default function AssessmentPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-16 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-glow/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Assessment" }]} />
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>2-minute assessment</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-white leading-[1.02]">
              Your <span className="text-gradient-brand">funding potential</span>, scored in 2 minutes.
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Answer five short questions and we'll return a personalized funding potential score plus recommended next steps — no sales call unless you request one.
            </p>
          </div>
        </div>
      </section>

      <Section className="!pt-8 max-w-3xl">
        <AssessmentForm />
      </Section>
    </>
  );
}
