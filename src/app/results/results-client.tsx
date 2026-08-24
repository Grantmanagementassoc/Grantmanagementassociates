"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { GlassCard } from "@/components/site/ui";
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
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search client, agency, or challenge…"
          className="rounded-full bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:border-cyan-400/50"
        />
        <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="rounded-full bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-2.5 text-sm text-foreground outline-none focus:border-cyan-400/50">
          <option value="all" className="bg-background text-foreground">All industries</option>
          {industries.map((i) => <option key={i.slug} value={i.slug} className="bg-background text-foreground">{i.name}</option>)}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-full bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-2.5 text-sm text-foreground outline-none focus:border-cyan-400/50">
          <option value="all" className="bg-background text-foreground">All funding types</option>
          <option value="Federal" className="bg-background text-foreground">Federal</option>
          <option value="State" className="bg-background text-foreground">State</option>
          <option value="Local" className="bg-background text-foreground">Local</option>
          <option value="Private" className="bg-background text-foreground">Private</option>
        </select>
        <select value={range} onChange={(e) => setRange(e.target.value)} className="rounded-full bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-2.5 text-sm text-foreground outline-none focus:border-cyan-400/50">
          <option value="all" className="bg-background text-foreground">All amounts</option>
          <option value="sub-1m" className="bg-background text-foreground">Under $1M</option>
          <option value="1-10m" className="bg-background text-foreground">$1M–$10M</option>
          <option value="10-100m" className="bg-background text-foreground">$10M–$100M</option>
          <option value="100m-plus" className="bg-background text-foreground">$100M+</option>
        </select>
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
