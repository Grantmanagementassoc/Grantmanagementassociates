"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Article } from "@/lib/scraped-articles";
import { ScrollReveal } from "@/components/site/scroll-reveal";

export function ArticlesClient({ items, categories }: { items: Article[]; categories: string[] }) {
  const [category, setCategory] = useState<string>("all");
  const [q, setQ] = useState<string>("");

  const gridItems = items.filter(i => i.slug !== "weekly-funding-digest-aug-17-21-2026");

  const filtered = useMemo(() => {
    return gridItems.filter((a) => {
      if (category !== "all" && a.category !== category) return false;
      if (q) {
        const s = q.toLowerCase();
        if (!a.title.toLowerCase().includes(s) && !a.excerpt.toLowerCase().includes(s)) return false;
      }
      return true;
    });
  }, [gridItems, category, q]);

  return (
    <>

      <div className="glass rounded-2xl p-5 grid gap-3 md:grid-cols-[1.5fr_1fr] relative z-10">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search articles..."
          className="rounded-full bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:border-cyan-400/50"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-full bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-2.5 text-sm text-foreground outline-none focus:border-cyan-400/50">
          <option value="all" className="bg-background text-foreground">All Categories</option>
          {categories.map((c) => <option key={c} value={c} className="bg-background text-foreground">{c}</option>)}
        </select>
      </div>

      <div className="mt-4 text-xs text-muted mb-8">
        Showing <span className="text-foreground font-medium">{filtered.length}</span> of {items.length} articles
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
        {filtered.map((post, idx) => (
          <ScrollReveal key={idx}>
            <Link href={`/articles/${post.slug}`} className="block group h-full">
              <article className="glass h-full rounded-2xl overflow-hidden flex flex-col transition-all duration-300 relative group-hover:border-cyan-400/30">
                <div className="p-8 flex-grow flex flex-col relative z-20">
                  {(post.image && !post.image.includes('fallback.svg') && !post.image.includes('media.licdn.com')) ? (
                    <div className="w-full h-48 mb-6 rounded-xl overflow-hidden relative border border-white/5 shrink-0 bg-black/20">
                      <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  ) : (
                    <div className="w-full h-48 mb-6 rounded-xl overflow-hidden relative border border-white/5 shrink-0 bg-gradient-to-br from-cyan-900/40 to-blue-900/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin opacity-50"></div>
                    </div>
                  )}
                  <div className="text-xs uppercase tracking-widest text-cyan-500 dark:text-cyan-300 font-semibold mb-4">{post.category}</div>
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-cyan-300 transition-colors duration-300 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-muted text-sm flex-grow opacity-90 leading-relaxed line-clamp-4">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 text-cyan-300 font-semibold text-sm group-hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    Read Article 
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </article>
            </Link>
          </ScrollReveal>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="mt-8 glass rounded-2xl p-10 text-center text-muted">
          No articles match those filters. <button onClick={() => { setCategory("all"); setQ(""); }} className="text-cyan-300 underline">Reset</button>
        </div>
      )}
    </>
  );
}
