import type { Metadata } from "next";
import { Eyebrow, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";
import { clients } from "@/data/clients";
import { ClientsClient } from "./clients-client";

export const metadata: Metadata = {
  title: "Our Clients & Partners",
  description: "Trusted by organizations at every scale.",
};

export default function ClientsPage() {
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

      <ClientsClient clients={clients} />
    </>
  );
}
