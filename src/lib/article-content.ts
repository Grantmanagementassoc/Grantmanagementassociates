import "server-only";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { and, desc, eq } from "drizzle-orm";
export async function getPublishedArticles(){return db.select().from(articles).where(eq(articles.status,"published")).orderBy(desc(articles.publishedAt));}
export async function getPublishedArticle(slug:string){const [row]=await db.select().from(articles).where(and(eq(articles.slug,slug),eq(articles.status,"published"))).limit(1);return row||null;}
