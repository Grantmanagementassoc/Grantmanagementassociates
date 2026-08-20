import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export const dynamic = 'force-static';

export default function BlogList() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'scraped_content.json');
  let blogPosts = [];

  if (fs.existsSync(dataPath)) {
    const content = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    // Filter and map all posts
    for (const [url, data] of Object.entries(content)) {
      const pageData = data as any;
      if (url.includes('/post/')) {
        const urlObj = new URL(url);
        let slug = urlObj.pathname;
        
        // Use the first image if available
        let imageUrl = null;
        if (pageData.images && pageData.images.length > 0) {
          const mainImg = pageData.images.find((img: any) => img.src && !img.src.includes('logo') && img.src.length > 0);
          imageUrl = mainImg ? mainImg.src : pageData.images[0].src;
        }

        // Generate a brief excerpt
        let excerpt = '';
        if (pageData.bodyText) {
          const paragraphs = pageData.bodyText.split('\n').filter((p: string) => p.trim().length > 30);
          if (paragraphs.length > 0) {
            excerpt = paragraphs[0].substring(0, 120) + '...';
          }
        }

        blogPosts.push({
          title: pageData.title.split('-')[0].trim() || 'Untitled Post',
          slug: slug,
          excerpt: excerpt,
          image: imageUrl
        });
      }
    }
  }

  return (
    <main className="min-h-screen bg-ink-950 text-white noise pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <header className="mb-16 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-brand mb-6 font-display drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            Our Insights & Updates
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Stay up to date with the latest grant opportunities, case studies, and industry trends.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-glow to-sapphire mx-auto rounded-full mt-8 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {blogPosts.map((post, idx) => (
            <Link href={post.slug} key={idx} className="block group">
              <article className="glass-strong card-hover h-full rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-[0_0_20px_rgba(59,130,246,0.15)] flex flex-col transition-all duration-300 relative">
                {/* Image Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-ink-900/50">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink-950/90 z-10"></div>
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-screen" 
                    />
                  ) : (
                    <div className="w-full h-full bg-ink-800 flex items-center justify-center">
                      <span className="text-cyan-glow opacity-50">No Image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col relative z-20 -mt-10">
                  <h2 className="text-xl font-bold font-display text-white group-hover:text-cyan-glow transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] mb-3">
                    {post.title}
                  </h2>
                  <p className="text-slate-300 text-sm flex-grow opacity-90 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.05)] text-sapphire font-semibold text-sm group-hover:text-cyan-glow transition-colors duration-300 flex items-center gap-2">
                    Read Article 
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        {blogPosts.length === 0 && (
          <div className="text-center text-slate-400 mt-20">
            No blog posts were found in the scraped data.
          </div>
        )}
      </div>
    </main>
  );
}
