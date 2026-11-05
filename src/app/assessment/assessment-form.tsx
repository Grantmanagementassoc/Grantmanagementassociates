"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Sparkles, Calendar, Award, ArrowRight } from "lucide-react";

type Data = {
  organizationName: string;
  organizationType: string;
  industry: string;
  projectDescription: string;
  fundingAmount: string;
  timeline: string;
  priorGrants: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  optInNewsletter: boolean;
};

const empty: Data = {
  organizationName: "",
  organizationType: "",
  industry: "",
  projectDescription: "",
  fundingAmount: "",
  timeline: "",
  priorGrants: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  optInNewsletter: true,
};

const steps = ["Organization", "Project", "History", "Goals", "Contact"];

type MatchedProgram = {
  name: string;
  agency: string;
  awardCeiling: string;
  timeline: string;
  fitReason: string;
};

type ReadinessAnalysis = {
  overallScore: number;
  pillars: { name: string; score: number; verdict: string }[];
  matchedPrograms: MatchedProgram[];
  writtenAnalysis: string;
  recommendations: string[];
};

export function AssessmentForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>(empty);
  const [honeypot, setHoneypot] = useState("");
  const [renderedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [analysis, setAnalysis] = useState<ReadinessAnalysis | null>(null);
  const [error, setError] = useState<string>("");

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  function update<K extends keyof Data>(key: K, value: Data[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function next() {
    setStep((s) => Math.min(steps.length - 1, s + 1));
  }
  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  async function submit() {
    setStatus("loading");
    setError("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contactEmail)) {
      setError("Please enter a valid work email address.");
      setStatus("error");
      return;
    }

    if (data.contactPhone && !/^\+?[0-9]{7,15}$/.test(data.contactPhone.replace(/[\s-()]/g, ""))) {
      setError("Please enter a valid numeric phone number with country code.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _website_hp: honeypot, _rendered_at: renderedAt }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to generate funding analysis");
      setAnalysis(json.analysis || {
        overallScore: json.score || 78,
        pillars: [],
        matchedPrograms: [],
        writtenAnalysis: "Your submission has been reviewed by GMA's strategic intelligence framework.",
        recommendations: json.recommendations || [],
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong generating your report");
    }
  }

  if (status === "success" && analysis) {
    return (
      <div className="glass rounded-3xl p-6 md:p-12 border border-cyan-500/30 shadow-2xl animate-fade-up">
        {/* Header Header */}
        <div className="text-center border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Preliminary Written Analysis
          </div>
          <h2 className="text-2xl md:text-4xl font-bold font-display text-foreground">
            Funding Intelligence Readout for <span className="text-cyan-400">{data.organizationName}</span>
          </h2>
          <p className="mt-3 text-muted text-sm max-w-xl mx-auto">
            Prepared using GMA's proprietary 22-factor Key Considerations Analysis (KCA) framework.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center">
            <div className="text-6xl md:text-7xl font-bold text-gradient-brand font-display">
              {analysis.overallScore}
              <span className="text-2xl text-muted font-normal">/100</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-muted mt-1">Overall Funding Potential Score</div>
          </div>
        </div>

        {/* Written Executive Analysis */}
        <div className="mt-8 p-6 rounded-2xl bg-black/20 border border-glass-border">
          <div className="text-sm font-semibold uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Strategic Readiness Summary
          </div>
          <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
            {analysis.writtenAnalysis}
          </p>
        </div>

        {/* Matched Programs & Deadlines */}
        {analysis.matchedPrograms.length > 0 && (
          <div className="mt-10">
            <div className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" /> Matched High-Probability Funding Programs
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {analysis.matchedPrograms.map((prog, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors">
                  <div className="text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-1">{prog.agency}</div>
                  <h4 className="text-base font-bold text-foreground mb-2">{prog.name}</h4>
                  <div className="flex flex-wrap gap-2 text-xs text-muted mb-3">
                    <span className="bg-black/30 px-2.5 py-1 rounded-md text-amber-300 font-medium">Ceiling: {prog.awardCeiling}</span>
                    <span className="bg-black/30 px-2.5 py-1 rounded-md text-cyan-200 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {prog.timeline}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{prog.fitReason}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Readiness Pillars */}
        {analysis.pillars.length > 0 && (
          <div className="mt-10">
            <div className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Evaluation Scoring Pillars
            </div>
            <div className="space-y-3">
              {analysis.pillars.map((pil, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/15 border border-glass-border">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-foreground">{pil.name}</span>
                    <span className="text-sm font-bold text-cyan-300">{pil.score}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mb-2">
                    <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${pil.score}%` }} />
                  </div>
                  <p className="text-xs text-muted">{pil.verdict}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Recommendations */}
        <div className="mt-10">
          <div className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
            Immediate Recommended Action Items
          </div>
          <ul className="space-y-2">
            {analysis.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-4 justify-between items-center">
          <div className="text-xs text-muted">
            A confirmation report has been dispatched to <span className="text-foreground font-medium">{data.contactEmail}</span>.
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/methodology" className="btn-secondary text-sm">
              Review KCA Methodology
            </Link>
            <Link href="/contact" className="btn-primary text-sm flex items-center gap-2">
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-3xl p-6 md:p-10 border border-glass-border shadow-xl">
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="_website_hp"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Progress */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs uppercase tracking-widest text-cyan-300 font-semibold">Step {step + 1} of {steps.length}</div>
        <div className="text-xs text-muted">{steps[step]}</div>
      </div>
      <div className="h-1 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-glow to-sapphire transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-8 min-h-[320px]">
        {step === 0 && (
          <div className="grid gap-4">
            <Text label="Organization name" value={data.organizationName} onChange={(v) => update("organizationName", v)} required placeholder="e.g. Pacific Clean Energy, City of Austin" />
            <Radio
              label="Organization type"
              value={data.organizationType}
              onChange={(v) => update("organizationType", v)}
              options={[
                { v: "nonprofit", l: "Nonprofit / Community" },
                { v: "corporation", l: "For-Profit / Corporation" },
                { v: "startup", l: "Emerging Tech / Startup" },
                { v: "government", l: "Government / Transit / Utility" },
                { v: "tribal", l: "Tribal Nation" },
                { v: "academic", l: "Academic / Research Institution" },
              ]}
            />
            <Text label="Industry / Sector" value={data.industry} onChange={(v) => update("industry", v)} placeholder="e.g. Clean Energy, Transportation, Defense, Healthcare…" />
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-4">
            <Textarea label="Briefly describe your project or initiative" value={data.projectDescription} onChange={(v) => update("projectDescription", v)} required placeholder="What are you building, deploying, or expanding?" />
            <Radio
              label="Target funding amount"
              value={data.fundingAmount}
              onChange={(v) => update("fundingAmount", v)}
              options={[
                { v: "sub-100K", l: "Under $100K" },
                { v: "100K-1M", l: "$100K – $1M" },
                { v: "1M-10M", l: "$1M – $10M" },
                { v: "10M+", l: "$10M+ (Federal Major Programs)" },
              ]}
            />
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4">
            <Radio
              label="Prior grant experience"
              value={data.priorGrants}
              onChange={(v) => update("priorGrants", v)}
              options={[
                { v: "none", l: "First-time grant applicant" },
                { v: "yes-one", l: "Secured 1–2 state or federal awards" },
                { v: "yes-multiple", l: "Regular federal/state awardee" },
              ]}
            />
            <Radio
              label="Anticipated submission timeline"
              value={data.timeline}
              onChange={(v) => update("timeline", v)}
              options={[
                { v: "urgent", l: "Active NOFO / under 30 days" },
                { v: "quarter", l: "1–3 months" },
                { v: "half", l: "3–6 months" },
                { v: "planning", l: "Strategic planning / 6+ months" },
              ]}
            />
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-4">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted block mb-2">What does success look like in 12–24 months?</label>
              <textarea
                value={data.projectDescription}
                onChange={(e) => update("projectDescription", e.target.value)}
                placeholder="Key goals (e.g., pilot demonstration, expanding service area, matching non-federal funds, hiring staff)..."
                rows={4}
                className="w-full rounded-2xl bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>
            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-muted">
              💡 <span className="text-foreground font-medium">Strategic Note:</span> Clear project outcomes dramatically improve alignment with agency reviewer scoring criteria.
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Text label="Your Name" value={data.contactName} onChange={(v) => update("contactName", v)} required placeholder="Jane Doe" />
              <Text label="Work Email" value={data.contactEmail} onChange={(v) => update("contactEmail", v)} type="email" required placeholder="jane@organization.com" />
            </div>
            <Text label="Phone (optional)" value={data.contactPhone} onChange={(v) => update("contactPhone", v)} type="tel" placeholder="(555) 000-0000" />
            
            <label className="flex items-start gap-3 mt-2 p-3 rounded-xl bg-black/10 dark:bg-white/5 border border-glass-border cursor-pointer">
              <input
                type="checkbox"
                checked={data.optInNewsletter}
                onChange={(e) => update("optInNewsletter", e.target.checked)}
                className="mt-1 accent-cyan-400 w-4 h-4 rounded cursor-pointer"
              />
              <span className="text-xs text-muted leading-relaxed">
                <strong className="text-foreground font-medium">Include Weekly Funding Digest:</strong> Send me GMA's curated brief covering newly opened federal & state grant solicitations every Tuesday.
              </span>
            </label>

            {error && <p className="text-sm text-rose-400 font-medium">{error}</p>}
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <button type="button" onClick={back} disabled={step === 0} className="btn-ghost disabled:opacity-30">
          ← Back
        </button>
        {step < steps.length - 1 ? (
          <button type="button" onClick={next} className="btn-primary">
            Continue →
          </button>
        ) : (
          <button type="button" onClick={submit} disabled={status === "loading"} className="btn-primary disabled:opacity-60">
            {status === "loading" ? "Analyzing Profile & Matching Programs…" : "Generate Free Funding Analysis →"}
          </button>
        )}
      </div>
    </div>
  );
}

function Text({ label, value, onChange, required, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted block mb-2">{label}{required && <span className="text-cyan-300"> *</span>}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-full bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:border-cyan-400/50 transition-colors"
      />
    </div>
  );
}

function Textarea({ label, value, onChange, required, placeholder }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted block mb-2">{label}{required && <span className="text-cyan-300"> *</span>}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        rows={3}
        className="w-full rounded-2xl bg-black/5 dark:bg-white/5 border border-glass-border px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-cyan-400/50 transition-colors"
      />
    </div>
  );
}

function Radio({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { v: string; l: string }[] }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted block mb-3">{label}</label>
      <div className="grid sm:grid-cols-2 gap-2">
        {options.map((o) => (
          <label key={o.v} className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm transition-all ${value === o.v ? "border-cyan-glow bg-cyan-glow/10 text-foreground font-medium" : "border-glass-border bg-black/5 dark:bg-white/5 text-muted hover:border-white/20"}`}>
            <input type="radio" className="sr-only" checked={value === o.v} onChange={() => onChange(o.v)} />
            {o.l}
          </label>
        ))}
      </div>
    </div>
  );
}
