"use client";
import { useMemo, useState } from "react";

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
};

const steps = ["Organization", "Project", "History", "Goals", "Contact"];

export function AssessmentForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>(empty);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<{ score: number; recommendations: string[] } | null>(null);
  const [error, setError] = useState<string>("");

  const progress = useMemo(() => ((step + 1) / (steps.length + 1)) * 100, [step]);

  function update<K extends keyof Data>(key: K, value: Data[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function next() {
    setStep((s) => Math.min(steps.length, s + 1));
  }
  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  async function submit() {
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setResult({ score: json.score, recommendations: json.recommendations });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success" && result) {
    return (
      <div className="glass rounded-3xl p-8 md:p-12">
        <div className="text-center">
          <div className="text-xs uppercase tracking-widest text-cyan-300">Your funding potential score</div>
          <div className="mt-4 text-7xl md:text-8xl font-semibold text-gradient-brand">{result.score}</div>
          <div className="mt-2 text-slate-400 text-sm">out of 100</div>
        </div>
        <div className="mt-10">
          <div className="text-sm font-semibold text-white uppercase tracking-widest">Personalized recommendations</div>
          <ul className="mt-4 space-y-3">
            {result.recommendations.map((r, i) => (
              <li key={i} className="flex gap-3 text-slate-200">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-glow shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a href="/contact" className="btn-primary">Book a strategy call →</a>
          <a href="/services" className="btn-secondary">Explore services</a>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-3xl p-6 md:p-10">
      {/* Progress */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs uppercase tracking-widest text-cyan-300">Step {step + 1} of {steps.length}</div>
        <div className="text-xs text-slate-400">{steps[step]}</div>
      </div>
      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-glow to-sapphire transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-8 min-h-[320px]">
        {step === 0 && (
          <div className="grid gap-4">
            <Text label="Organization name" value={data.organizationName} onChange={(v) => update("organizationName", v)} required />
            <Radio
              label="Organization type"
              value={data.organizationType}
              onChange={(v) => update("organizationType", v)}
              options={[
                { v: "nonprofit", l: "Nonprofit" },
                { v: "corporation", l: "For-profit / Corporation" },
                { v: "startup", l: "Startup" },
                { v: "government", l: "Government / Public agency" },
                { v: "tribal", l: "Tribal Nation" },
                { v: "academic", l: "Academic / Research" },
              ]}
            />
            <Text label="Industry / sector" value={data.industry} onChange={(v) => update("industry", v)} placeholder="e.g. Clean energy, Transportation, Healthcare…" />
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-4">
            <Textarea label="Briefly describe your project" value={data.projectDescription} onChange={(v) => update("projectDescription", v)} required />
            <Radio
              label="Target funding amount"
              value={data.fundingAmount}
              onChange={(v) => update("fundingAmount", v)}
              options={[
                { v: "sub-100K", l: "Under $100K" },
                { v: "100K-1M", l: "$100K – $1M" },
                { v: "1M-10M", l: "$1M – $10M" },
                { v: "10M+", l: "$10M+" },
              ]}
            />
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4">
            <Radio
              label="Prior grant history"
              value={data.priorGrants}
              onChange={(v) => update("priorGrants", v)}
              options={[
                { v: "none", l: "First-time applicant" },
                { v: "yes-one", l: "One or two prior grants" },
                { v: "yes-multiple", l: "Multiple prior grants" },
              ]}
            />
            <Radio
              label="Timeline to submit"
              value={data.timeline}
              onChange={(v) => update("timeline", v)}
              options={[
                { v: "urgent", l: "Under 30 days" },
                { v: "quarter", l: "1–3 months" },
                { v: "half", l: "3–6 months" },
                { v: "planning", l: "6+ months / just exploring" },
              ]}
            />
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-4">
            <Textarea label="What are you hoping to achieve?" value={data.projectDescription /* reuse */} onChange={(v) => update("projectDescription", v)} placeholder="Optional — what does success look like in 12 months?" />
          </div>
        )}

        {step === 4 && (
          <div className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Text label="Your name" value={data.contactName} onChange={(v) => update("contactName", v)} required />
              <Text label="Work email" value={data.contactEmail} onChange={(v) => update("contactEmail", v)} type="email" required />
            </div>
            <Text label="Phone (optional)" value={data.contactPhone} onChange={(v) => update("contactPhone", v)} type="tel" />
            <p className="text-xs text-slate-500">We'll email your personalized results and only follow up if you request a call.</p>
            {error && <p className="text-sm text-rose-300">{error}</p>}
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <button type="button" onClick={back} disabled={step === 0} className="btn-ghost disabled:opacity-30">← Back</button>
        {step < steps.length - 1 ? (
          <button type="button" onClick={next} className="btn-primary">Continue →</button>
        ) : (
          <button type="button" onClick={submit} disabled={status === "loading"} className="btn-primary disabled:opacity-60">
            {status === "loading" ? "Analyzing…" : "See my results →"}
          </button>
        )}
      </div>
    </div>
  );
}

function Text({ label, value, onChange, required, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-slate-400 block mb-2">{label}{required && <span className="text-cyan-300"> *</span>}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/50 transition-colors"
      />
    </div>
  );
}

function Textarea({ label, value, onChange, required, placeholder }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-slate-400 block mb-2">{label}{required && <span className="text-cyan-300"> *</span>}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/50 transition-colors"
      />
    </div>
  );
}

function Radio({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { v: string; l: string }[] }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-slate-400 block mb-3">{label}</label>
      <div className="grid sm:grid-cols-2 gap-2">
        {options.map((o) => (
          <label key={o.v} className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm transition-all ${value === o.v ? "border-cyan-glow bg-cyan-glow/10 text-white" : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20"}`}>
            <input type="radio" className="sr-only" checked={value === o.v} onChange={() => onChange(o.v)} />
            {o.l}
          </label>
        ))}
      </div>
    </div>
  );
}
