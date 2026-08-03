"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [setup, setSetup] = useState<boolean | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => { fetch("/api/admin/auth/status").then(r => r.json()).then(d => setSetup(d.setupRequired)).catch(() => setSetup(false)); }, []);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch(setup ? "/api/admin/auth/setup" : "/api/admin/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    const json = await res.json(); setLoading(false);
    if (!res.ok) { setError(json.error || "Unable to sign in."); return; }
    router.replace("/admin"); router.refresh();
  }
  return <main className="min-h-screen bg-[#eef0f3] text-[#19202e] grid lg:grid-cols-2">
    <section className="hidden lg:flex bg-[#101827] text-white p-16 flex-col justify-between">
      <div><div className="text-xl font-semibold">Grant Management Associates</div><div className="mt-2 text-xs uppercase tracking-[.22em] text-slate-400">Operations Console</div></div>
      <div><p className="text-4xl font-display leading-tight max-w-lg">Manage publishing, client intake, and team operations from one secure workspace.</p><p className="mt-6 text-sm text-slate-400">Authorized personnel only. Activity is attributable to the signed-in account.</p></div>
      <div className="text-xs text-slate-500">© {new Date().getFullYear()} GMA</div>
    </section>
    <section className="p-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white border border-slate-200 shadow-sm rounded-lg p-8">
        <div className="text-xs uppercase tracking-[.18em] text-blue-700">{setup ? "Initial setup" : "Secure access"}</div>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">{setup ? "Create owner account" : "Sign in to GMA Admin"}</h1>
        <p className="mt-2 text-sm text-slate-500">{setup ? "This first account receives full owner permissions. Setup closes after creation." : "Use your organization-issued credentials."}</p>
        {setup === null ? <div className="mt-8 text-sm text-slate-500">Checking installation…</div> : <form onSubmit={submit} className="mt-8 space-y-5">
          {setup && <Field name="name" label="Full name" />}
          <Field name="email" label="Email address" type="email" />
          <Field name="password" label="Password" type="password" hint={setup ? "Minimum 12 characters" : undefined} />
          {error && <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded p-3">{error}</p>}
          <button disabled={loading} className="w-full rounded-md bg-[#18243a] text-white px-4 py-3 text-sm font-medium hover:bg-[#22314d] disabled:opacity-50">{loading ? "Please wait…" : setup ? "Create owner account" : "Sign in"}</button>
        </form>}
        <a href="/" className="mt-6 block text-center text-xs text-slate-500 hover:text-slate-900">← Return to website</a>
      </div>
    </section>
  </main>;
}
function Field({ name, label, type = "text", hint }: { name: string; label: string; type?: string; hint?: string }) { return <label className="block"><span className="text-sm font-medium text-slate-700">{label}</span><input name={name} type={type} required minLength={type === "password" ? 12 : undefined} className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100" />{hint && <span className="mt-1 block text-xs text-slate-400">{hint}</span>}</label>; }
