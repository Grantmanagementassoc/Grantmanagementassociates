import { NextResponse } from "next/server";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
export async function GET() { const rows = await db.select({ id: adminUsers.id }).from(adminUsers).limit(1); return NextResponse.json({ setupRequired: rows.length === 0 }); }
