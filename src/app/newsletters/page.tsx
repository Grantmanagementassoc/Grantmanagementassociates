import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { ScrollReveal } from "@/components/site/scroll-reveal";

export const metadata: Metadata = {
  title: "Newsletters",
  description: "Browse our past newsletters and funding digests.",
};

const newsletters = [
  {
    slug: "weekly-funding-digest-aug-17-21-2026",
    title: "Weekly Funding Digest",
    date: "August 17–21, 2026",
    description: "Our comprehensive weekly breakdown of new federal, state, and foundational funding opportunities across key sectors.",
  }
];

export default function NewslettersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Editorial Hero Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-200 via-transparent to-transparent dark:from-slate-800 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <header className="mb-16 text-center relative z-10 max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-4">Newsletters</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-display">
            NEWSLETTERS & DIGESTS
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-serif">
            Stay ahead of the curve with our curated insights and funding opportunities.
          </p>
        </header>
        
        <div className="max-w-5xl mx-auto mt-12 relative z-10">
          <div className="grid gap-6">
            {newsletters.map((newsletter) => (
              <ScrollReveal key={newsletter.slug} random={true}>
                <Link
                  href={`/newsletters/${newsletter.slug}`}
                  className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300"
                >
                  <div className="h-16 w-16 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <FileText className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {newsletter.title}
                      </h3>
                      <span className="text-xs uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                        {newsletter.date}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-base max-w-3xl leading-relaxed">
                      {newsletter.description}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                    Read Digest <ArrowRight className="h-5 w-5" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
