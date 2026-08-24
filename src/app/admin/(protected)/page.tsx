import Link from "next/link";
import { db } from "@/db";
import { articles, assessmentResponses, contactSubmissions, adminUsers, employeeTasks } from "@/db/schema";
import { count, eq } from "drizzle-orm";

export default async function AdminDashboard() {
  const [[articleCount], [contactCount], [assessmentCount], [staffCount], [taskCount]] = await Promise.all([
    db.select({ value: count() }).from(articles),
    db.select({ value: count() }).from(contactSubmissions).where(eq(contactSubmissions.status, "new")),
    db.select({ value: count() }).from(assessmentResponses).where(eq(assessmentResponses.status, "new")),
    db.select({ value: count() }).from(adminUsers).where(eq(adminUsers.active, true)),
    db.select({ value: count() }).from(employeeTasks).where(eq(employeeTasks.status, "todo")),
  ]);
  const stats = [
    { label: "Articles", value: articleCount.value, href: "/admin/articles", note: "Published and drafts" },
    { label: "New inquiries", value: contactCount.value, href: "/admin/submissions?type=contact", note: "Require follow-up" },
    { label: "New assessments", value: assessmentCount.value, href: "/admin/submissions?type=assessment", note: "Require review" },
    { label: "Active staff", value: staffCount.value, href: "/admin/employees", note: "With console access" },
    { label: "Open tasks", value: taskCount.value, href: "/admin/tasks", note: "Across the team" },
  ];
  return <>
    <div className="flex items-end justify-between gap-4"><div><p className="text-xs uppercase tracking-[.16em] text-blue-700">Overview</p><h1 className="mt-2 text-3xl font-semibold text-slate-950">Operations dashboard</h1><p className="mt-2 text-sm text-slate-500">Publishing, pipeline, and team activity at a glance.</p></div><Link href="/admin/articles/new" className="rounded-md bg-[#18243a] text-white px-4 py-2.5 text-sm font-medium">New article</Link></div>
    <div className="mt-8 grid sm:grid-cols-2 xl:grid-cols-5 gap-4">{stats.map(s => <Link key={s.label} href={s.href} className="bg-white border border-slate-200 rounded-lg p-5 hover:border-slate-400 transition-colors"><div className="text-sm text-slate-500">{s.label}</div><div className="mt-3 text-3xl font-semibold text-slate-950">{s.value}</div><div className="mt-2 text-xs text-slate-400">{s.note}</div></Link>)}</div>
    <div className="mt-8 grid lg:grid-cols-2 gap-6">
      <section className="bg-white border border-slate-200 rounded-lg p-6"><h2 className="font-semibold text-slate-950">Quick actions</h2><div className="mt-4 divide-y divide-slate-100">{[["Write an article","Create, preview, and publish a new insight.","/admin/articles/new"],["Review client intake","Open contact forms and assessments.","/admin/submissions"],["Assign team work","Create a task with owner and deadline.","/admin/tasks"]].map(([t,d,h]) => <Link key={t} href={h} className="flex justify-between gap-4 py-4 group"><div><div className="text-sm font-medium text-slate-800">{t}</div><div className="mt-1 text-xs text-slate-500">{d}</div></div><span className="text-slate-400 group-hover:text-blue-700">→</span></Link>)}</div></section>
      <section className="bg-[#18243a] text-white rounded-lg p-6"><div className="text-xs uppercase tracking-[.16em] text-blue-200">Access policy</div><h2 className="mt-3 text-xl font-semibold">Role-based by default</h2><p className="mt-3 text-sm leading-6 text-slate-300">Owners and admins have full access. Staff receive only the modules assigned to them. Sessions expire after 12 hours and can be revoked by disabling the employee account.</p><Link href="/admin/employees" className="mt-6 inline-flex text-sm font-medium text-white border-b border-white/50">Manage access</Link></section>
    </div>
  </>;
}
