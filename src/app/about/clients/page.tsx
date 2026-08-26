import type { Metadata } from "next";
import { Section, SectionTitle, Eyebrow, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";
import { clients } from "@/data/clients";

export const metadata: Metadata = {
  title: "Our Clients & Partners",
  description: "Trusted by organizations at every scale.",
};

export default function ClientsPage() {
  // Group clients by category
  const groupedClients = clients.reduce((acc, client) => {
    const category = client.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(client);
    return acc;
  }, {} as Record<string, typeof clients>);

  // Sort categories alphabetically
  const categories = Object.keys(groupedClients).sort();

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-[1600px] px-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Clients" }]} />
          <div className="max-w-3xl">
            <Eyebrow>Partnerships</Eyebrow>
            <h1 className="mt-6 text-5xl md:text-7xl font-semibold text-foreground leading-[0.98]">
              Trusted by organizations at <span className="text-gradient-gold">every scale.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed">
              From Fortune 500 enterprises to regional nonprofits, we partner with visionary organizations to secure transformational funding.
            </p>
          </div>
        </div>
      </section>

      {categories.map((category, index) => (
        <Section key={category} className={index % 2 === 0 ? "bg-black/5 dark:bg-white/5" : ""}>
          <SectionTitle title={category} />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {groupedClients[category]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((client, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-4 p-6 glass rounded-2xl border border-glass-border card-hover hover:border-cyan-300/50 transition-colors bg-white/5 dark:bg-white/5 backdrop-blur-md">
                  {/* Graceful Fallback: Just display a sleek badge/initial since we don't have their domain for the logo yet */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-sapphire/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold text-xl shrink-0">
                    {client.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-sm font-semibold text-foreground leading-tight">{client.name}</div>
                </div>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
