"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { GlassCard } from "@/components/site/ui";
import type { CaseStudy } from "@/lib/content";
import { industries } from "@/lib/content";

export function CaseStudiesClient({ items }: { items: CaseStudy[] }) {
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
          className="rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/50"
        />
        <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400/50">
          <option value="all">All industries</option>
          {industries.map((i) => <option key={i.slug} value={i.slug}>{i.name}</option>)}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400/50">
          <option value="all">All funding types</option>
          <option value="Federal">Federal</option>
          <option value="State">State</option>
          <option value="Local">Local</option>
          <option value="Private">Private</option>
        </select>
        <select value={range} onChange={(e) => setRange(e.target.value)} className="rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400/50">
          <option value="all">All amounts</option>
          <option value="sub-1m">Under $1M</option>
          <option value="1-10m">$1M–$10M</option>
          <option value="10-100m">$10M–$100M</option>
          <option value="100m-plus">$100M+</option>
        </select>
      </div>

      <div className="mt-4 text-xs text-slate-400">
        Showing <span className="text-white font-medium">{filtered.length}</span> of {items.length}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filtered.map((cs) => (
          <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group">
            <GlassCard className="h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-400">{cs.type} · {cs.year}</div>
                  <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-cyan-300">{cs.client}</h3>
                  <p className="mt-1 text-sm text-slate-400">{cs.agency}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-semibold text-gradient-gold">{cs.amount}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300 line-clamp-2">{cs.challenge}</p>
            </GlassCard>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-8 glass rounded-2xl p-10 text-center text-slate-400">
          No case studies match those filters. <button onClick={() => { setIndustry("all"); setType("all"); setRange("all"); setQ(""); }} className="text-cyan-300 underline">Reset</button>
        </div>
      )}
    </>
  );
}
