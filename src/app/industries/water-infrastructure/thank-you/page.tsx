import React from "react";
import Link from "next/link";
import { Eyebrow, Breadcrumbs, BackgroundGrid } from "@/components/site/ui";
import { FileText, Download, ArrowLeft, CheckCircle } from "lucide-react";

export default function WaterThankYouPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden noise min-h-[75vh] flex flex-col justify-center bg-background">
        <BackgroundGrid />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" aria-hidden />
        
        <div className="relative mx-auto max-w-[1400px] px-6 w-full text-center">
          <div className="flex justify-center mb-8">
            <Breadcrumbs items={[
              { label: "Home", href: "/" },
              { label: "Water Infrastructure", href: "/industries/water-infrastructure" },
              { label: "Download Ready" }
            ]} />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <CheckCircle className="h-4 w-4" /> Download Access Confirmed
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
              Your Water Funding Playbook is Ready
            </h1>
            
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Thank you for requesting <strong>After the Cliff: The Post-IIJA Water Funding Playbook</strong>. Your 50-page tactical guide is ready for immediate download below.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/GMA_After_the_Cliff_Playbook_v1.7_2026.pdf" 
                download="GMA_After_the_Cliff_Playbook_v1.7_2026.pdf"
                className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-base font-bold shadow-xl shadow-cyan-500/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5" /> Download Playbook (PDF)
              </a>
            </div>

            <p className="mt-4 text-xs text-muted">
              File size: 5.1 MB · Adobe PDF format
            </p>
            
            <div className="mt-12 pt-8 border-t border-border flex justify-center gap-8">
              <Link 
                href="/industries/water-infrastructure" 
                className="text-sm font-semibold text-muted hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Water Practice
              </Link>
              <Link 
                href="/" 
                className="text-sm font-semibold text-muted hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
