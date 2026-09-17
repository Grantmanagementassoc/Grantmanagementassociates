import React from "react";
import Link from "next/link";
import { Section, Eyebrow, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";

export default function ThankYouPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise min-h-[70vh] flex flex-col justify-center">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-[1600px] px-6 w-full text-center">
          <div className="flex justify-center mb-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Defense & Technology", href: "/industries/defense" }, { label: "Thank You" }]} />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Eyebrow>Thank You</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl font-semibold text-foreground leading-[1.1]">
              Your Playbook is Ready
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Thank you for requesting the Defense & Technology Growth Playbook. You can download your copy below.
            </p>
            
            <div className="mt-12">
              <a 
                href="/GMA_Defense_Tech_Playbook.pdf" 
                download="GMA_Defense_Tech_Playbook.pdf"
                className="btn-primary inline-flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF Now ↓
              </a>
            </div>
            
            <div className="mt-8">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold uppercase tracking-widest">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
