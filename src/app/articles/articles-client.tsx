"use client";
import { useMemo, useState } from "react";
import type { LinkedInPost } from "@/lib/linkedin";

export function ArticlesClient({ items }: { items: LinkedInPost[] }) {
  const [q, setQ] = useState<string>("");

  const filtered = useMemo(() => {
    return items.filter((a) => {
      if (q) {
        const s = q.toLowerCase();
        if (!a.commentary.toLowerCase().includes(s)) return false;
      }
      return true;
    });
  }, [items, q]);

  return (
    <>
      <div className="glass rounded-2xl p-5 mb-8">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search posts..."
          className="w-full rounded-full bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:border-cyan-400/50"
        />
      </div>

      <div className="mt-4 text-xs text-muted mb-8">
        Showing <span className="text-foreground font-medium">{filtered.length}</span> of {items.length} posts
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {filtered.map((post) => (
          <a href={`https://www.linkedin.com/feed/update/${post.id}`} target="_blank" rel="noopener noreferrer" key={post.id} className="block group">
            <article className="glass h-full rounded-2xl overflow-hidden flex flex-col transition-all duration-300 relative group-hover:border-cyan-400/30">
              <div className="p-8 flex-grow flex flex-col relative z-20">
                <div className="text-xs uppercase tracking-widest text-cyan-300 font-semibold mb-4">
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
                <p className="text-muted text-sm flex-grow opacity-90 leading-relaxed line-clamp-6 whitespace-pre-wrap">
                  {post.commentary || "Update from Kristin Cooper"}
                </p>
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 text-cyan-300 font-semibold text-sm group-hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                  View on LinkedIn
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="mt-8 glass rounded-2xl p-10 text-center text-muted">
          No posts match your search. <button onClick={() => setQ("")} className="text-cyan-300 underline">Reset</button>
        </div>
      )}
    </>
  );
}
