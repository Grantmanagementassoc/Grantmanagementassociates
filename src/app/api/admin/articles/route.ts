import { NextResponse } from "next/server";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { desc } from "drizzle-orm";
import { requireAdmin } from "@/lib/admin-auth";

function cleanSlug(v: string) { return v.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
export async function GET() { try { await requireAdmin("articles"); return NextResponse.json(await db.select().from(articles).orderBy(desc(articles.updatedAt))); } catch { return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); } }
export async function POST(req: Request) {
  try { const user = await requireAdmin("articles"); const b = await req.json(); if (!b.title || !b.excerpt || !b.body) return NextResponse.json({ error: "Title, excerpt, and article body are required." }, { status: 400 });
    const [row] = await db.insert(articles).values({ slug: cleanSlug(b.slug || b.title), title: b.title, excerpt: b.excerpt, body: b.body, category: b.category || "Insight", author: b.author || user.name, featuredImage: b.featuredImage || null, imageAlt: b.imageAlt || null, tags: String(b.tags || "").split(",").map((x:string)=>x.trim()).filter(Boolean), metaTitle: b.metaTitle || null, metaDescription: b.metaDescription || null, status: b.status === "published" ? "published" : "draft", featured: Boolean(b.featured), publishedAt: b.status === "published" ? new Date() : null, createdBy: user.id }).returning(); return NextResponse.json(row);
  } catch (e) { return NextResponse.json({ error: e instanceof Error && e.message === "FORBIDDEN" ? "Forbidden" : "Unable to save article. The slug may already exist." }, { status: 400 }); }
}
