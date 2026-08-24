import type { Metadata } from "next";
import { Section, SectionTitle, Eyebrow, GlassCard, Breadcrumbs, CTACard, Accordion, BackgroundGrid } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Responsible AI Commitment",
  description: "Ethical AI. Human expertise. Uncompromising security. GMA's commitment to responsible AI in grantmaking.",
};

export default function ResponsibleAIPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-glow/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-[1600px] px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Responsible AI" }]} />
          <div className="max-w-3xl">
            <Eyebrow>Our commitment</Eyebrow>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-foreground leading-[0.98]">
              Ethical AI. Human expertise. <br /><span className="text-gradient-brand">Uncompromising security.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
              At Grant Management Associates, your privacy, security, and the integrity of your grant applications are our highest priorities.
              As AI evolves rapidly, some firms have rushed to adopt low-cost tools like DeepSeek — raising serious concerns about data privacy
              and offshore data storage. <span className="text-foreground">We do things differently.</span>
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "U.S.-based partners only", d: "No offshore processing. No data routed to jurisdictions with sovereign risk. All AI infrastructure lives on U.S. soil under U.S. law." },
            { t: "Human-in-the-loop, always", d: "AI helps identify and analyze — but every proposal narrative is authored by an experienced GMA professional." },
            { t: "Client owns everything", d: "Your capability statements, project descriptions, and proposal drafts are your intellectual property. Full stop." },
            { t: "Transparent tool selection", d: "We disclose which AI tools we use, how they're trained, and how we mitigate bias in every engagement." },
            { t: "No AI-generated final proposals", d: "Funders are increasingly cautious — and some prohibit AI-authored content outright. We never expose you to that risk." },
            { t: "SOC 2 & enterprise controls", d: "Our AI partners meet enterprise-grade security requirements including SOC 2 Type II attestations." },
          ].map((f) => (
            <GlassCard key={f.t} hover={false}>
              <div className="text-lg font-semibold text-foreground">{f.t}</div>
              <p className="mt-3 text-muted leading-relaxed">{f.d}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="How we use AI"
          title={<>AI accelerates <span className="text-gradient-brand">discovery</span> — humans deliver <span className="text-gradient-brand">the narrative</span>.</>}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { t: "Opportunity matching", d: "Semantic search across 10,000+ live programs to surface high-fit opportunities in minutes, not weeks." },
            { t: "Compliance decomposition", d: "Automatically extract review criteria, formatting rules, and deadlines from complex FOAs." },
            { t: "Research acceleration", d: "Rapid synthesis of past awardees, agency priorities, and adjacent programs to inform positioning." },
          ].map((c) => (
            <GlassCard key={c.t} hover={false}>
              <div className="text-2xl">🧠</div>
              <div className="mt-3 text-lg font-semibold text-foreground">{c.t}</div>
              <p className="mt-2 text-sm text-muted leading-relaxed">{c.d}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12">
          <SectionTitle eyebrow="FAQ" title="AI, security & privacy." />
          <Accordion
            items={[
              { q: "Do you use ChatGPT / DeepSeek / Claude?", a: "We selectively use U.S.-based enterprise AI providers under NDAs and enterprise data-handling terms. We do not use DeepSeek or any tool that routes data offshore." },
              { q: "Where is my proposal data stored?", a: "Encrypted at rest and in transit on U.S.-based infrastructure. Access is scoped to your engagement team only." },
              { q: "Will funders know AI was used?", a: "The final narrative is authored and reviewed by a human. AI accelerates research and analysis — it does not draft your proposal." },
              { q: "What if my funder prohibits AI use?", a: "We honor that constraint absolutely. Our SOPs allow for AI-off engagements and we document our approach for your compliance file." },
              { q: "Do you offer contracts with data-handling terms?", a: "Yes — we routinely execute MSAs and DPAs with client-specific privacy, security, and IP terms." },
            ]}
          />
        </div>
      </Section>

      <Section>
        <CTACard
          title="Have security questions? Let's talk."
          subtitle="Our team will walk through your specific data-handling and compliance requirements — no NDA required to start the conversation."
          primary={{ label: "Book a security discussion", href: "/contact" }}
          secondary={{ label: "See services", href: "/services" }}
        />
      </Section>
    </>
  );
}
