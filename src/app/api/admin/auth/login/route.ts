import { NextResponse } from "next/server";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createAdminSession, verifyPassword } from "@/lib/admin-auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, String(email || "").toLowerCase().trim())).limit(1);
  if (!user || !user.active || !verifyPassword(String(password || ""), user.passwordHash)) return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  await db.update(adminUsers).set({ lastLoginAt: new Date() }).where(eq(adminUsers.id, user.id));
  await createAdminSession(user.id);
  return NextResponse.json({ ok: true });
}
