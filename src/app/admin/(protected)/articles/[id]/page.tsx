import { db } from "@/db";
import { articles } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound, redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
import { ArticleEditor } from "../article-editor";
type P={id:string};
export default async function EditArticlePage({params}:{params:Promise<P>}){try{await requireAdmin("articles");}catch{redirect("/admin");}const {id}=await params;const [a]=await db.select().from(articles).where(eq(articles.id,Number(id))).limit(1);if(!a)return notFound();return <><div className="mb-8"><p className="text-xs uppercase tracking-[.16em] text-blue-700">Content / Edit</p><h1 className="mt-2 text-3xl font-semibold text-slate-950">Edit article</h1><p className="mt-2 text-sm text-slate-500">Last updated {a.updatedAt.toLocaleString()}</p></div><ArticleEditor article={a} /></>;}
