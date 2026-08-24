import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getAdminUser } from "@/lib/admin-auth";
import { AdminShell } from "../admin-shell";
export default async function ProtectedAdminLayout({ children }: { children: ReactNode }) { const user = await getAdminUser(); if (!user) redirect("/admin/login"); return <AdminShell user={user}>{children}</AdminShell>; }
