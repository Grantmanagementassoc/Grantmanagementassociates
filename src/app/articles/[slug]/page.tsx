import { notFound } from "next/navigation";
import { articles } from "@/lib/scraped-articles";
import { BackgroundGrid } from "@/components/site/ui";
import Link from "next/link";

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug);
  const article = articles.find((a) => a.slug === resolvedParams.slug || a.slug === decodedSlug || encodeURIComponent(a.slug) === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground noise pt-32 pb-16 relative overflow-hidden">
      <BackgroundGrid />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <Link href="/articles" className="inline-flex items-center text-sm font-medium text-cyan-300 hover:text-cyan-400 mb-10 transition-colors">
          <span className="mr-2">←</span> Back to Articles
        </Link>
        
        <header className="mb-12">
          <div className="text-sm font-semibold tracking-widest uppercase text-cyan-300 mb-4">{article.category}</div>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground leading-tight mb-6">{article.title}</h1>
        </header>

        <div className="prose prose-invert prose-lg prose-cyan max-w-none prose-headings:font-semibold prose-a:text-cyan-400 prose-img:rounded-xl" dangerouslySetInnerHTML={{ __html: article.bodyText || "" }} />
      </div>
    </main>
  );
}
