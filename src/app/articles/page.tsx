import { getLinkedInPosts } from "@/lib/linkedin";
import { ArticlesClient } from "./articles-client";

export const metadata = {
  title: "Articles & Updates — LinkedIn Feed",
  description: "Stay up to date with the latest grant opportunities, strategies, and industry trends directly from our CEO's LinkedIn.",
};

export default async function ArticlesPage() {
  const posts = await getLinkedInPosts();

  return (
    <main className="min-h-screen bg-background text-foreground noise pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <header className="mb-16 text-center relative z-10 max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase text-cyan-300 mb-4">Latest Insights</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
            Insights & Updates
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Stay up to date with the latest strategies and industry trends.
          </p>
        </header>

        <ArticlesClient items={posts} />
      </div>
    </main>
  );
}
