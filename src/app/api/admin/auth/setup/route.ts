import { NextResponse } from "next/server";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { createAdminSession, hashPassword, ALL_PERMISSIONS } from "@/lib/admin-auth";

export async function POST(req: Request) {
  return NextResponse.json({ error: "Setup is disabled. Use environment variables for login." }, { status: 403 });
}
