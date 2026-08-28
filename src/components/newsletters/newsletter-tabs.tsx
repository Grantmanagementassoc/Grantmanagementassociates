"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { NewsletterCard } from "./newsletter-card";

interface CategoryData {
  category: string;
  grants: any[];
}

export function NewsletterTabs({ categories }: { categories: CategoryData[] }) {
  const [activeTab, setActiveTab] = useState(categories[0]?.category || "");

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    // Track which category users are interested in
    sendGAEvent({ event: "category_viewed", value: category });
    
    // Smooth scroll to the top of the content area
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const activeCategory = categories.find((c) => c.category === activeTab);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Sidebar Tabs */}
      <div className="w-full md:w-64 lg:w-80 flex-shrink-0 sticky top-24">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 px-2">
          Categories
        </h3>
        <nav className="flex flex-col gap-1">
          {categories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => handleTabClick(cat.category)}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                activeTab === cat.category
                  ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 border border-transparent"
              }`}
            >
              <span>{cat.category}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === cat.category 
                  ? "bg-emerald-200 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400" 
                  : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-500 group-hover:bg-slate-300 dark:group-hover:bg-slate-700"
              }`}>
                {cat.grants.length}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 w-full">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">
            {activeCategory?.category}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {activeCategory?.grants.length === 0 ? (
            activeCategory.category === "Overview" ? (
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                <p className="text-lg leading-relaxed mb-4">
                  Welcome to the Grant Management Associates Weekly Funding Digest. 
                </p>
                <p className="leading-relaxed">
                  We have carefully curated the most significant new federal, state, and foundational funding opportunities available this week. Our intelligence covers critical sectors including Agriculture, Infrastructure, Defense, and Energy.
                </p>
                <p className="leading-relaxed mt-4 text-emerald-700 dark:text-emerald-400 font-medium">
                  ← Select a category from the sidebar to explore specific grants, view award ranges, and find direct links to the official NOFOs.
                </p>
              </div>
            ) : (
              <div className="text-slate-500 dark:text-slate-400 p-8 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                No specific grants listed for this category in the current digest.
              </div>
            )
          ) : (
            activeCategory?.grants.map((grant, idx) => (
              <NewsletterCard key={idx} grant={grant} isPolicy={activeCategory.category === "Policy Updates"} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
