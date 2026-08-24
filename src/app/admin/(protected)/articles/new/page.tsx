import { ArticleEditor } from "../article-editor";
import { requireAdmin } from "@/lib/admin-auth";
import { redirect } from "next/navigation";
export default async function NewArticlePage(){try{await requireAdmin("articles");}catch{redirect("/admin");}return <><div className="mb-8"><p className="text-xs uppercase tracking-[.16em] text-blue-700">Content / New</p><h1 className="mt-2 text-3xl font-semibold text-slate-950">Create article</h1></div><ArticleEditor /></>;}
