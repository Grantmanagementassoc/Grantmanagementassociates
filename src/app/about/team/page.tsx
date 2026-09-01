import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionTitle, Eyebrow, GlassCard, CTACard, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";
import { site } from "@/lib/content";
import teamRaw from "@/data/team.json";
import { specialistTeams } from "@/data/specialist-teams";

const team = teamRaw as Array<{ name: string; role: string; image: string; bio: string }>;

export const metadata: Metadata = {
  title: "Our Team | About Us",
  description: `Meet the leadership and experts behind Grant Management Associates.`,
};

export default function TeamPage() {
  return (
    <>
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
          {/* CEO Card */}
          <div className="w-full max-w-4xl relative">
            <GlassCard className="flex flex-col md:flex-row gap-8 relative z-10 border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
              <div className="flex flex-col items-center md:items-start shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-cyan-glow to-sapphire flex items-center justify-center text-xl font-bold text-white shadow-[0_0_40px_rgba(0,240,255,0.2)] overflow-hidden">
                  <Image src={team[0].image || ""} alt={team[0].name} width={256} height={256} className="object-cover object-top w-full h-full" />
                </div>
                <div className="mt-8 text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{team[0].name}</div>
                  <div className="text-lg text-cyan-300 mt-2 font-semibold tracking-wide uppercase">{team[0].role}</div>
                </div>
              </div>
              <div className="text-lg md:text-xl text-muted leading-relaxed prose prose-invert max-w-none prose-p:my-4 prose-h3:text-cyan-300 prose-h3:text-2xl prose-h3:mt-8 prose-ul:my-4 prose-li:my-2" dangerouslySetInnerHTML={{ __html: team[0].bio || "" }} />
            </GlassCard>
            {/* Vertical trunk line */}
            <div className="hidden lg:block absolute left-1/2 bottom-[-3rem] w-px h-12 bg-gradient-to-b from-cyan-500/50 to-glass-border" />
          </div>

          {/* Horizontal branching line */}
          <div className="hidden lg:block w-full max-w-[75%] relative h-px bg-glass-border mt-12 mb-6">
            <div className="absolute left-0 top-0 w-px h-6 bg-glass-border" />
            <div className="absolute left-[33.33%] top-0 w-px h-6 bg-glass-border" />
            <div className="absolute left-[66.66%] top-0 w-px h-6 bg-glass-border" />
            <div className="absolute right-0 top-0 w-px h-6 bg-glass-border" />
          </div>

          {/* Remaining Team Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mt-6 lg:mt-0">
            {team.slice(1).map((m) => (
              <GlassCard key={m.name} className="flex flex-col relative z-10 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-sapphire/20 flex items-center justify-center text-base font-semibold text-foreground border border-glass-border overflow-hidden shrink-0">
                    <Image src={m.image || ""} alt={m.name} width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{m.name}</div>
                    <div className="text-xs text-cyan-300/80 mt-0.5">{m.role}</div>
                  </div>
                </div>
                {m.bio && (
                  <div className="mt-4 text-sm text-muted leading-relaxed prose prose-invert prose-base max-w-none line-clamp-[8] hover:line-clamp-none transition-all prose-p:my-2" dangerouslySetInnerHTML={{ __html: m.bio }} />
                )}
              </GlassCard>
            ))}
          </div>
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
