import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

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
    <main className="min-h-screen bg-background text-foreground noise pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <header className="mb-16 text-center relative z-10 max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase text-cyan-300 mb-4">Newsletters</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            NEWSLETTERS & DIGESTS
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Stay ahead of the curve with our curated insights and funding opportunities.
          </p>
        </header>
        
        <div className="max-w-5xl mx-auto mt-12 relative z-10">
          <div className="grid gap-6">
            {newsletters.map((newsletter) => (
              <Link
                key={newsletter.slug}
                href={`/newsletters/${newsletter.slug}`}
                className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 rounded-3xl glass border border-glass-border hover:border-cyan-400/30 transition-all duration-300 shadow-xl"
              >
                <div className="h-16 w-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {newsletter.title}
                    </h3>
                    <span className="text-xs uppercase tracking-wider font-semibold text-cyan-900 bg-cyan-400 px-3 py-1 rounded-full">
                      {newsletter.date}
                    </span>
                  </div>
                  <p className="text-slate-400 text-base max-w-3xl leading-relaxed">
                    {newsletter.description}
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                  Read Digest <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
