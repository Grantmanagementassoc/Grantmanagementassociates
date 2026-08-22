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
  let article = articles.find((a) => a.slug === resolvedParams.slug || a.slug === decodedSlug || encodeURIComponent(a.slug) === resolvedParams.slug);
  
  if (article && !article.bodyText) {
    try {
      const fs = require('fs');
      const path = require('path');
      const dataPath = path.join(process.cwd(), 'src', 'data', 'scraped_content.json');
      if (fs.existsSync(dataPath)) {
        const content = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        const postUrl = `https://www.grantmanagementassoc.com/post/${article.slug}`;
        if (content[postUrl] && content[postUrl].bodyText) {
          article = { ...article, bodyText: content[postUrl].bodyText };
        }
      }
    } catch (e) {
      console.error("Could not load bodyText from scraped_content.json", e);
    }
  }

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
        
        <div className="mb-12 flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-6">
          <div className="text-sm font-semibold tracking-widest uppercase text-cyan-500 dark:text-cyan-300">
            {article.category}
          </div>
          {article.linkedinUrl && (
            <a 
              href={article.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-sm shadow-lg hover:shadow-cyan-500/25"
            >
              Read on LinkedIn <span className="ml-1">→</span>
            </a>
          )}
        </div>
        
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground leading-tight mb-6">{article.title}</h1>
        </header>

        {article.bodyText ? (
          <div className="prose dark:prose-invert max-w-none w-full prose-headings:font-semibold prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-img:rounded-xl prose-img:shadow-xl prose-p:leading-relaxed prose-p:text-lg dark:text-gray-300 text-gray-800" dangerouslySetInnerHTML={{ __html: article.bodyText }} />
        ) : (
          <div className="glass p-10 rounded-2xl text-center max-w-2xl mx-auto mt-12 shadow-xl">
            <p className="text-xl text-muted leading-relaxed mb-8">
              {article.excerpt}
            </p>
            {article.linkedinUrl && (
              <a 
                href={article.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Read full article on LinkedIn <span className="ml-2">→</span>
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
