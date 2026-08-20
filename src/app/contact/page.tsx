import type { Metadata } from "next";
import { Section, Eyebrow, GlassCard, Breadcrumbs, Accordion, BackgroundGrid } from "@/components/site/ui";
import { site } from "@/lib/content";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the GMA team. Free 30-minute strategy calls, and one-business-day response on all inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="max-w-3xl">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-foreground leading-[0.98]">
              Let's build your <br /><span className="text-gradient-brand">funding strategy.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
              Every engagement starts with a free 30-minute strategy call. We respond within one business day.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <GlassCard hover={false} className="p-8 md:p-10">
            <Eyebrow>Send us a message</Eyebrow>
            <div className="mt-6">
              <ContactForm />
            </div>
          </GlassCard>
          <div className="space-y-4">
            <GlassCard hover={false}>
              <div className="text-xs uppercase tracking-widest text-muted">Direct</div>
              <div className="mt-3 space-y-2">
                <a href={site.phoneHref} className="block text-lg text-foreground hover:text-cyan-300 transition-colors">{site.phone}</a>
                <a href={site.emailHref} className="block text-sm text-muted hover:text-foreground transition-colors">{site.email}</a>
              </div>
            </GlassCard>
            {site.addresses.map((a) => (
              <GlassCard key={a.city} hover={false}>
                <div className="text-xs uppercase tracking-widest text-muted">{a.label}</div>
                <div className="mt-2 text-foreground font-semibold">{a.city}, {a.state}</div>
                <div className="mt-1 text-sm text-muted">{a.line1}</div>
                <div className="text-sm text-muted">{a.city}, {a.state} {a.zip}</div>
              </GlassCard>
            ))}
            <GlassCard hover={false}>
              <div className="text-xs uppercase tracking-widest text-muted">Response promise</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                <div className="text-sm text-muted">One business day. Every message reviewed by a strategist.</div>
              </div>
            </GlassCard>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-foreground">Before you reach out.</h2>
          </div>
          <Accordion
            items={[
              { q: "Is the strategy call really free?", a: "Yes — 30 minutes with a senior strategist, no sales pitch. We'll leave you with two or three concrete next steps regardless of whether we engage." },
              { q: "Do you sign NDAs?", a: "Mutual NDAs are standard. Send us your template or use ours." },
              { q: "How quickly can you start?", a: "Standard kickoff within 5 business days. Rush engagements available." },
              { q: "Do you work internationally?", a: "We focus on U.S. federal, state, and local funding. We support U.S.-based organizations with international programs." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
