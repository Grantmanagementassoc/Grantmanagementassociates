"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

const nav = [
  { href: "/admin", label: "Overview", icon: "□" },
  { href: "/admin/articles", label: "Articles", icon: "A" },
  { href: "/admin/submissions", label: "Client submissions", icon: "S" },
  { href: "/admin/employees", label: "Employees & access", icon: "E" },
  { href: "/admin/tasks", label: "Team workload", icon: "T" },
];

export function AdminShell({ children, user }: { children: ReactNode; user: { name: string; email: string; role: string; permissions: string[] } }) {
  const path = usePathname();
  const router = useRouter();
  async function logout() {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#19202e] flex">
      <aside className="fixed inset-y-0 left-0 hidden lg:flex w-64 bg-[#111827] text-white flex-col z-40">
        <div className="h-20 px-6 flex items-center border-b border-white/10">
          <div><div className="text-sm font-semibold tracking-wide">GMA</div><div className="text-[10px] uppercase tracking-[.2em] text-slate-400">Operations Console</div></div>
        </div>
        <nav className="p-3 flex-1 space-y-1">
          {nav.map((n) => {
            const active = n.href === "/admin" ? path === n.href : path.startsWith(n.href);
            return <Link key={n.href} href={n.href} className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${active ? "bg-white text-[#111827]" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}><span className="w-6 h-6 rounded border border-current/20 grid place-items-center text-[10px]">{n.icon}</span>{n.label}</Link>;
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="text-sm font-medium truncate">{user.name}</div>
          <div className="text-xs text-slate-400 truncate">{user.email}</div>
          <button onClick={logout} className="mt-3 text-xs text-slate-300 hover:text-white">Sign out →</button>
        </div>
      </aside>
      <div className="flex-1 lg:ml-64 min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 px-5 md:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="lg:hidden text-sm font-semibold">GMA Admin</div>
          <div className="hidden lg:block text-xs text-slate-500 uppercase tracking-wider">Internal operations</div>
          <div className="flex items-center gap-3"><span className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-600 capitalize">{user.role}</span><Link href="/" target="_blank" className="text-xs text-blue-700 hover:underline">View website ↗</Link></div>
        </header>
        <div className="lg:hidden overflow-x-auto bg-white border-b border-slate-200 px-3 py-2 flex gap-1">{nav.map(n => <Link key={n.href} href={n.href} className="whitespace-nowrap text-xs px-3 py-2 rounded bg-slate-100">{n.label}</Link>)}</div>
        <main className="p-5 md:p-8 max-w-[1500px] mx-auto">{children}</main>
      </div>
    </div>
  );
}
