"use client";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setMessage("Thanks — we'll respond within one business day.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Full name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Organization" name="organization" />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Select label="Service interest" name="serviceInterest" options={[
          "Grant Writing & Management",
          "Funding Identification",
          "Go / No-Go Analysis",
          "AI-Powered Matching",
          "Strategic Alliances",
          "MissionMomentum (Nonprofit)",
          "Other / Not sure",
        ]} />
        <Select label="Budget range" name="budget" options={[
          "Under $25K",
          "$25K–$75K",
          "$75K–$150K",
          "$150K+",
          "Not sure yet",
        ]} />
      </div>
      <div>
        <label className="text-xs uppercase tracking-widest text-slate-400 block mb-2">What can we help with?</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, funding target, and timeline…"
          className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/50 transition-colors"
        />
      </div>
      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-slate-500">We respond within one business day.</p>
        <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-60">
          {status === "loading" ? "Sending…" : "Send message →"}
        </button>
      </div>
      {message && (
        <p className={`text-sm ${status === "success" ? "text-cyan-300" : "text-rose-300"}`}>{message}</p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-slate-400 block mb-2">{label}{required && <span className="text-cyan-300"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/50 transition-colors"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-slate-400 block mb-2">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400/50 transition-colors"
      >
        <option value="" disabled className="bg-[#0a0f17] text-white">Select…</option>
        {options.map((o) => <option key={o} value={o} className="bg-[#0a0f17] text-white">{o}</option>)}
      </select>
    </div>
  );
}
