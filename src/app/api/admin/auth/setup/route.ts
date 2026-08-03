import { NextResponse } from "next/server";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { createAdminSession, hashPassword, ALL_PERMISSIONS } from "@/lib/admin-auth";

export async function POST(req: Request) {
  const existing = await db.select({ id: adminUsers.id }).from(adminUsers).limit(1);
  if (existing.length) return NextResponse.json({ error: "Initial setup is closed." }, { status: 403 });
  const { name, email, password } = await req.json();
  if (!name || !email || typeof password !== "string" || password.length < 12) return NextResponse.json({ error: "Name, email, and a 12+ character password are required." }, { status: 400 });
  const [user] = await db.insert(adminUsers).values({ name, email: email.toLowerCase().trim(), passwordHash: hashPassword(password), role: "owner", permissions: [...ALL_PERMISSIONS] }).returning({ id: adminUsers.id });
  await createAdminSession(user.id);
  return NextResponse.json({ ok: true });
}
