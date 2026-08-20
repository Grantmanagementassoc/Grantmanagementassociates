import { notFound } from "next/navigation";
import { articles } from "@/lib/scraped-articles";
import { BackgroundGrid } from "@/components/site/ui";
import Link from "next/link";

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

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

        <div className="prose prose-invert prose-cyan max-w-none text-muted-foreground">
          <p className="text-xl leading-relaxed">{article.excerpt}</p>
          <div className="mt-12 glass p-8 rounded-2xl border-cyan-500/20 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Read the full article</h3>
            <p className="text-muted-foreground mb-6">
              This article was published on the Grant Management Associates website.
            </p>
            <a 
              href={`https://www.grantmanagementassoc.com/post/${article.slug}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              View on Website
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
