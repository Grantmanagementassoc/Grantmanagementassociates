import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'scraped_content.json');
  if (!fs.existsSync(dataPath)) return [];
  
  const content = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const params = [];
  
  for (const url of Object.keys(content)) {
    try {
      const urlObj = new URL(url);
      if (urlObj.pathname !== '/') {
        // Remove leading and trailing slashes
        const slugStr = urlObj.pathname.replace(/^\/|\/$/g, '');
        if (slugStr) {
          const slug = slugStr.split('/');
          params.push({ slug });
        }
      }
    } catch (e) {
      // invalid URL
    }
  }
  
  return params;
}

export default async function ScrapedPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const pathUrl = `/${slug.join('/')}`;
  
  const dataPath = path.join(process.cwd(), 'src', 'data', 'scraped_content.json');
  let pageData = null;
  
  if (fs.existsSync(dataPath)) {
    const content = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    // Find the page in content
    const targetUrl = `https://www.grantmanagementassoc.com${pathUrl}`;
    const targetUrlSlash = `https://www.grantmanagementassoc.com${pathUrl}/`;
    pageData = content[targetUrl] || content[targetUrlSlash];
  }

  if (!pageData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground noise pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <article className="glass-strong card-hover p-8 sm:p-12 rounded-2xl relative overflow-hidden">
          {/* Cyberpunk background glow effect */}
          <div className="absolute top-[-20%] left-[-10%] w-1/2 h-1/2 rounded-full bg-cyan-glow/20 blur-[100px] pointer-events-none"></div>
          
          <header className="mb-12 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-brand mb-6 font-display drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              {pageData.title.split('-')[0].trim()}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-glow to-sapphire mx-auto rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
          </header>
          
          {pageData.images && pageData.images.length > 0 && pageData.images[0].src && (
            <div className="mb-12 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-[0_0_20px_rgba(59,130,246,0.3)] relative z-10 group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink-950/80 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img 
                src={pageData.images[0].src} 
                alt={pageData.images[0].alt || 'Page feature image'}
                className="w-full h-auto object-cover max-h-[500px] opacity-90 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" 
              />
            </div>
          )}
          
          <div className="prose prose-lg prose-invert prose-headings:font-display prose-headings:text-cyan-glow prose-a:text-sapphire prose-a:link-underline max-w-none relative z-10 text-muted">
            {pageData.bodyText.split('\n').map((paragraph: string, idx: number) => {
              if (!paragraph.trim()) return null;
              if (paragraph.length < 50 && paragraph.endsWith(':')) {
                return <h3 key={idx} className="text-2xl font-semibold mt-10 mb-4 text-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">{paragraph}</h3>;
              }
              return <p key={idx} className="mb-6 leading-relaxed opacity-90">{paragraph}</p>;
            })}
          </div>
          
          {pageData.images && pageData.images.length > 1 && (
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {pageData.images.slice(1, 5).map((img: any, idx: number) => (
                img.src && (
                  <div key={idx} className="rounded-lg overflow-hidden border border-[rgba(0,240,255,0.2)] hover:border-cyan-glow hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300 cursor-pointer group bg-background/50">
                    <img src={img.src} alt={img.alt || 'Gallery image'} className="w-full h-56 object-cover opacity-75 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-300" />
                  </div>
                )
              ))}
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
