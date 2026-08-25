import { notFound } from "next/navigation";
import { NewsletterTabs } from "@/components/newsletters/newsletter-tabs";
import aug17Data from "@/data/newsletters/aug-17-21-2026.json";

// In a real app, this would come from a database or CMS.
// For now, we only have one parsed newsletter.
const availableNewsletters = {
  "weekly-funding-digest-aug-17-21-2026": {
    title: "Weekly Funding Digest",
    date: "August 17–21, 2026",
    data: aug17Data
  }
};

export async function generateStaticParams() {
  return Object.keys(availableNewsletters).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const meta = availableNewsletters[resolvedParams.slug as keyof typeof availableNewsletters];
  if (!meta) return { title: "Newsletter Not Found" };
  
  return {
    title: `${meta.title} - ${meta.date}`,
    description: `Read the ${meta.title} for ${meta.date}.`
  };
}

export default async function NewsletterPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const meta = availableNewsletters[resolvedParams.slug as keyof typeof availableNewsletters];
  
  if (!meta) {
    notFound();
  }

  const categories = meta.data;

  return (
    <main className="min-h-screen bg-background text-foreground noise pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <header className="mb-16 text-center relative z-10 max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase text-cyan-300 mb-4">{meta.date}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display uppercase">
            {meta.title}
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Opportunities and insights for the week.
          </p>
        </header>
        
        <div className="mt-12">
          <NewsletterTabs categories={categories} />
        </div>
      </div>
    </main>
  );
}
