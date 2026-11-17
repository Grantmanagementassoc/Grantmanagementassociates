import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";
import { requireAdmin } from "@/lib/admin-auth";
import { sql } from "drizzle-orm";

export async function POST() {
  try {
    await requireAdmin("submissions");
    
    // Purge rows matching the XRumer bot spam signatures
    const result = await db.execute(sql`
      DELETE FROM contact_submissions 
      WHERE 
        message ~ '^\d+$'
        OR (LENGTH(name) > 12 AND name NOT LIKE '% %' AND message ~ '^\d+')
        OR (email LIKE '%.%.%.%@gmail.com' AND message ~ '^\d+')
    `);

    return NextResponse.json({ ok: true, deleted: result.rowCount });
  } catch (err: any) {
    console.error("Purge spam error:", err);
    return NextResponse.json({ error: err.message || "Failed to purge spam" }, { status: 500 });
  }
}
