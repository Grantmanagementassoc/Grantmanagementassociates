import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomBytes } from "crypto";

export async function POST(req: Request) {
  try { await requireAdmin("articles"); const data = await req.formData(); const file = data.get("file"); if (!(file instanceof File)) return NextResponse.json({ error: "Choose an image." }, { status: 400 }); if (!file.type.startsWith("image/")) return NextResponse.json({ error: "Only image files are accepted." }, { status: 400 }); if (file.size > 5 * 1024 * 1024) return NextResponse.json({ error: "Image must be under 5 MB." }, { status: 400 }); const ext = file.name.split(".").pop()?.replace(/[^a-z0-9]/gi, "").toLowerCase() || "jpg"; const name = `${Date.now()}-${randomBytes(5).toString("hex")}.${ext}`; const dir = path.join(process.cwd(), "public", "uploads"); await mkdir(dir, { recursive: true }); await writeFile(path.join(dir, name), Buffer.from(await file.arrayBuffer())); return NextResponse.json({ url: `/uploads/${name}` }); } catch { return NextResponse.json({ error: "Upload failed." }, { status: 400 }); }
}
