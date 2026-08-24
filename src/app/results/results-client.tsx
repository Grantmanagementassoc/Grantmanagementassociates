"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { GlassCard } from "@/components/site/ui";
import { ChevronDown } from "lucide-react";
import type { CaseStudy } from "@/lib/content";
import { industries } from "@/lib/content";

export function ResultsClient({ items }: { items: CaseStudy[] }) {
  const [industry, setIndustry] = useState<string>("all");
  const [type, setType] = useState<string>("all");
  const [range, setRange] = useState<string>("all");
  const [q, setQ] = useState<string>("");

  const filtered = useMemo(() => {
    return items.filter((cs) => {
      if (industry !== "all" && cs.industry !== industry) return false;
      if (type !== "all" && cs.type !== type) return false;
      if (range !== "all") {
        const n = cs.amountNumber;
        if (range === "sub-1m" && n >= 1_000_000) return false;
        if (range === "1-10m" && (n < 1_000_000 || n >= 10_000_000)) return false;
        if (range === "10-100m" && (n < 10_000_000 || n >= 100_000_000)) return false;
        if (range === "100m-plus" && n < 100_000_000) return false;
      }
      if (q) {
        const s = q.toLowerCase();
        if (!cs.client.toLowerCase().includes(s) && !cs.agency.toLowerCase().includes(s) && !cs.challenge.toLowerCase().includes(s)) return false;
      }
      return true;
    });
  }, [items, industry, type, range, q]);

  return (
    <>
      <div className="glass rounded-2xl p-5 grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="relative">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search client, agency, or challenge…"
            className="w-full rounded-full bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-3 text-base text-foreground placeholder:text-muted outline-none focus:border-cyan-400/50 transition-colors"
          />
        </div>
        <div className="relative">
          <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full appearance-none rounded-full bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-3 pr-10 text-base text-foreground outline-none focus:border-cyan-400/50 transition-colors cursor-pointer">
            <option value="all" className="bg-white dark:bg-zinc-900 text-black dark:text-white">All industries</option>
            {industries.map((i) => <option key={i.slug} value={i.slug} className="bg-white dark:bg-zinc-900 text-black dark:text-white">{i.name}</option>)}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
        </div>
        <div className="relative">
          <select value={type} onChange={(e) => setType(e.target.value)} className="w-full appearance-none rounded-full bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-3 pr-10 text-base text-foreground outline-none focus:border-cyan-400/50 transition-colors cursor-pointer">
            <option value="all" className="bg-white dark:bg-zinc-900 text-black dark:text-white">All funding types</option>
            <option value="Federal" className="bg-white dark:bg-zinc-900 text-black dark:text-white">Federal</option>
            <option value="State" className="bg-white dark:bg-zinc-900 text-black dark:text-white">State</option>
            <option value="Local" className="bg-white dark:bg-zinc-900 text-black dark:text-white">Local</option>
            <option value="Private" className="bg-white dark:bg-zinc-900 text-black dark:text-white">Private</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
        </div>
        <div className="relative">
          <select value={range} onChange={(e) => setRange(e.target.value)} className="w-full appearance-none rounded-full bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-3 pr-10 text-base text-foreground outline-none focus:border-cyan-400/50 transition-colors cursor-pointer">
            <option value="all" className="bg-white dark:bg-zinc-900 text-black dark:text-white">All amounts</option>
            <option value="sub-1m" className="bg-white dark:bg-zinc-900 text-black dark:text-white">Under $1M</option>
            <option value="1-10m" className="bg-white dark:bg-zinc-900 text-black dark:text-white">$1M–$10M</option>
            <option value="10-100m" className="bg-white dark:bg-zinc-900 text-black dark:text-white">$10M–$100M</option>
            <option value="100m-plus" className="bg-white dark:bg-zinc-900 text-black dark:text-white">$100M+</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
        </div>
      </div>

      <div className="mt-4 text-xs text-muted">
        Showing <span className="text-foreground font-medium">{filtered.length}</span> of {items.length}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filtered.map((cs) => (
          <div key={cs.slug} className="group">
            <GlassCard className="h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-300">{cs.client}</h3>
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted">
                    {industries.find((i) => i.slug === cs.industry)?.name || cs.industry} · {cs.type}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-semibold text-gradient-gold">{cs.amount}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted line-clamp-2">{cs.challenge}</p>
            </GlassCard>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-8 glass rounded-2xl p-10 text-center text-muted">
          No case studies match those filters. <button onClick={() => { setIndustry("all"); setType("all"); setRange("all"); setQ(""); }} className="text-cyan-300 underline">Reset</button>
        </div>
      )}
    </>
  );
}
