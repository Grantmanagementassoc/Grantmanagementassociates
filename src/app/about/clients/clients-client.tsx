"use client";

import { useState } from "react";
import { Section } from "@/components/site/ui";
import { ClientLogoCard } from "@/components/site/client-logo-card";
import { ScrollReveal } from "@/components/site/scroll-reveal";

type Client = {
  name: string;
  domain?: string;
  category?: string;
};

export function ClientsClient({ clients }: { clients: Client[] }) {
  const groupedClients = clients.reduce((acc, client) => {
    const category = client.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(client);
    return acc;
  }, {} as Record<string, Client[]>);

  const categories = Object.keys(groupedClients).sort();
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <>
      <Section className="pb-8">
        <ScrollReveal animation="fade-up">
          <div className="flex flex-wrap gap-2 md:gap-3 mb-12 relative z-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 border-cyan-400"
                    : "bg-black/5 dark:bg-white/5 text-muted hover:text-foreground hover:bg-black/10 dark:hover:bg-white/10 border-transparent"
                } border`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 relative z-10">
          {groupedClients[activeCategory]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((client, idx) => (
              <ClientLogoCard key={`${activeCategory}-${idx}`} client={client} />
          ))}
        </div>
      </Section>
    </>
  );
}
