import "server-only";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { and, desc, eq } from "drizzle-orm";
export async function getPublishedArticles() {
  try {
    return await db.select().from(articles).where(eq(articles.status,"published")).orderBy(desc(articles.publishedAt));
  } catch (error) {
    console.warn("Failed to get published articles:", error);
    return [];
  }
}
export async function getPublishedArticle(slug:string) {
  try {
    const [row] = await db.select().from(articles).where(and(eq(articles.slug,slug),eq(articles.status,"published"))).limit(1);
    return row || null;
  } catch (error) {
    console.warn(`Failed to get published article for slug ${slug}:`, error);
    return null;
  }
}
