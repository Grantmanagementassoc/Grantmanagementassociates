import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "GMA Weekly Funding Digest | Week of August 17–21, 2026",
  description: "Weekly Funding Intelligence Digest - Vertical Send Playbook",
};

export default function WeeklyDigestPage() {
  return (
    <main className="min-h-screen bg-background text-foreground noise pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <Link href="/articles" className="inline-flex items-center text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </Link>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200" style={{ height: "80vh" }}>
          <iframe 
            src="/digests/weekly-funding-digest-aug-17-21-2026.html" 
            className="w-full h-full border-none"
            title="Weekly Funding Digest Playbook"
          />
        </div>
      </div>
    </main>
  );
}
