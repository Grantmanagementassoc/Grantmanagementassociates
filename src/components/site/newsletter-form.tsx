"use client";
import { useState } from "react";

export function NewsletterForm({ source = "footer" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [renderedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, _website_hp: honeypot, _rendered_at: renderedAt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setMessage("You're on the list. First brief lands within 7 days.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm">
      {/* Anti-spam honeypot */}
      <div className="hidden" aria-hidden="true" style={{ display: "none", position: "absolute", left: "-9999px" }}>
        <label htmlFor="_news_hp">Do not fill this</label>
        <input type="text" id="_news_hp" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>
      <label className="text-xs uppercase tracking-widest text-muted mb-2 block">
        Weekly funding brief
      </label>
      <div className="flex items-center gap-2 rounded-full border border-glass-border bg-black/5 dark:bg-white/5 pl-4 pr-1 py-1 focus-within:border-cyan-400/50 transition-colors">
        <input
          type="email"
          required
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          title="Please provide a valid email address."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@organization.org"
          className="bg-transparent flex-1 text-sm text-foreground placeholder:text-muted outline-none py-1.5"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary text-xs px-4 py-1.5 disabled:opacity-60"
        >
          {status === "loading" ? "…" : "Subscribe"}
        </button>
      </div>
      {message && (
        <p className={`mt-2 text-xs ${status === "success" ? "text-cyan-300" : "text-rose-300"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
