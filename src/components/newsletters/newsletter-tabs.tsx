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
  };

  const activeCategory = categories.find((c) => c.category === activeTab);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Sidebar Tabs */}
      <div className="w-full md:w-64 lg:w-80 flex-shrink-0 sticky top-24">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 px-2">
          Categories
        </h3>
        <nav className="flex flex-col gap-1">
          {categories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => handleTabClick(cat.category)}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                activeTab === cat.category
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent"
              }`}
            >
              <span>{cat.category}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === cat.category ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800 text-slate-500 group-hover:bg-slate-700"
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
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
            {activeCategory?.category}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {activeCategory?.grants.length === 0 ? (
            <div className="text-slate-400 p-8 text-center bg-slate-900/50 border border-glass-border rounded-xl">
              No specific grants listed for this category in the current digest.
            </div>
          ) : (
            activeCategory?.grants.map((grant, idx) => (
              <NewsletterCard key={idx} grant={grant} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
