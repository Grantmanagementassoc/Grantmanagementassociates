import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Share2, Link as LinkIcon, Mail } from "lucide-react";
import { NewsletterTabs } from "@/components/newsletters/newsletter-tabs";
import aug17Data from "@/data/newsletters/aug-17-21-2026.json";

import aug24Data from "@/data/newsletters/aug-24-28-2026.json";

// In a real app, this would come from a database or CMS.
const availableNewsletters = {
  "weekly-funding-digest-aug-24-28-2026": {
    title: "Weekly Funding Digest",
    date: "August 24–28, 2026",
    author: "GMA Editorial Team",
    data: aug24Data
  },
  "weekly-funding-digest-aug-17-21-2026": {
    title: "Weekly Funding Digest",
    date: "August 17–21, 2026",
    author: "GMA Editorial Team",
    data: aug17Data
  }
};

export async function generateStaticParams() {
  return Object.keys(availableNewsletters).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const meta = availableNewsletters[resolvedParams.slug as keyof typeof availableNewsletters];
  if (!meta) return { title: "Newsletter Not Found" };
  
  return {
    title: `${meta.title} - ${meta.date}`,
    description: `Read the ${meta.title} for ${meta.date}.`
  };
}

export default async function NewsletterPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const meta = availableNewsletters[resolvedParams.slug as keyof typeof availableNewsletters];
  
  if (!meta) {
    notFound();
  }

  const categories = meta.data;

  return (
    <main className="min-h-screen bg-background text-foreground pb-16 md:pb-24">
      {/* Editorial Hero Background */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        {/* Deep navy brand background instead of transparent */}
        <div className="absolute inset-0 bg-slate-900 z-0" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 z-0 mix-blend-overlay" />

        {/* Abstract brand color overlays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-slate-800/80 rounded-full blur-[100px] mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                {meta.date}
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">
                Grant Management Associates
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
              {meta.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-serif">
              Opportunities and insights for the week. Navigate categories to find curated federal, state, and foundational grants.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Tabs and Content */}
        <div className="mt-12 mb-20">
          <NewsletterTabs categories={categories} />
        </div>

        {/* END OF PAGE EXPERIENCE */}
        <div className="max-w-5xl mx-auto mt-24 border-t border-slate-200 dark:border-slate-800 pt-16">
          
          {/* Author and Share Block */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 bg-slate-50 dark:bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-300 dark:border-slate-700">
                <Image src="/team/1.jpeg" alt="GMA Editorial" width={56} height={56} className="object-cover h-full w-full grayscale" />
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Curated By</div>
                <div className="text-lg font-display font-bold text-slate-900 dark:text-white">{meta.author}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Share Digest:</span>
              <div className="flex gap-2">
                <button className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors shadow-sm" title="Share via Email">
                  <Mail className="h-4 w-4" />
                </button>
                <button className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors shadow-sm" title="Copy Link">
                  <LinkIcon className="h-4 w-4" />
                </button>
                <button className="h-10 w-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors shadow-sm" title="Share">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 mb-16 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Need Help Pursuing These Opportunities?
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Our strategists can help you evaluate competitive positioning and navigate the application process.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/50 hover:-translate-y-1"
              >
                Talk to a Grant Strategist <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Related Articles / Digests */}
          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
              More from the Editorial Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Weekly Funding Digest", date: "August 10–14, 2026", type: "Digest" },
                { title: "The Key Considerations Framework", date: "June 10, 2025", type: "Whitepaper" },
                { title: "From Inspiration to Execution: The Next Step After Fed Supernova", date: "August 27, 2025", type: "Insight" }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-500 mb-3">
                      {item.type}
                    </div>
                    <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>
                    <div className="mt-auto pt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/50">
                      <span>{item.date}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
