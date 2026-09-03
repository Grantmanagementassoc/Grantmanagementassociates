import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionTitle, Eyebrow, GlassCard, CTACard, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";
import { site, team } from "@/lib/content";
import { specialistTeams } from "@/data/specialist-teams";
import { TeamGridClient } from "./team-grid-client";
export const metadata: Metadata = {
  title: "Our Team | About Us",
  description: `Meet the leadership and experts behind Grant Management Associates.`,
};

export default function TeamPage() {
  const personSchemas = team.map((m) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
    worksFor: {
      "@type": "Organization",
      name: site.name,
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemas) }}
      />
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
        <Image src="/images/generated/11.png" alt="Background" fill className="object-cover opacity-10 absolute inset-0 z-[-1] pointer-events-none mix-blend-luminosity" priority />
        <div className="relative mx-auto max-w-[1600px] px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about/firm" }, { label: "Our Team" }]} />
          <div className="max-w-3xl">
            <Eyebrow>Our Team</Eyebrow>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-foreground leading-[0.98]">
              The team behind <br /><span className="text-gradient-brand">the strategy.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
              Former federal program officers, PhDs, and lifelong grants professionals who know exactly what agencies look for.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <Section>
        <div className="flex flex-col items-center mt-8">
          <TeamGridClient team={team} />
        </div>

        {/* Specialist Teams */}
        <div className="w-full mt-24">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-[0.98]">
              Our <span className="text-gradient-brand">Specialist Teams.</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Our multidisciplinary specialist teams bring together deep industry knowledge, technical expertise, and grant and funding experience to help clients navigate complex opportunities.
            </p>
          </div>

          <div className="space-y-16">
            {specialistTeams.map((teamData) => (
              <div key={teamData.name} className="relative pt-8">
                {/* Team Header */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{teamData.name}</h3>
                  {teamData.description && (
                    <p className="text-lg text-muted max-w-4xl">{teamData.description}</p>
                  )}
                </div>

                {/* Team Members Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {teamData.members.map((m, idx) => (
                    <GlassCard key={idx} className="flex flex-col relative z-10 hover:border-cyan-500/30 transition-colors">
                      <div className="font-semibold text-foreground text-lg">{m.name}</div>
                      {m.role && <div className="text-sm text-cyan-300/80 mt-1">{m.role}</div>}
                      <p className="mt-4 text-sm text-muted leading-relaxed">{m.bio}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <CTACard
          title="Join our growing team."
          subtitle="We are always looking for exceptional grant professionals and strategists."
          primary={{ label: "View Open Roles", href: "/careers" }}
          secondary={{ label: "Contact Us", href: "/contact" }}
        />
      </Section>
    </>
  );
}
