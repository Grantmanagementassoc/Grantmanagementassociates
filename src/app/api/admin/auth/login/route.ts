import { NextResponse } from "next/server";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createAdminSession, verifyPassword } from "@/lib/admin-auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    await createAdminSession(1);
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
}
