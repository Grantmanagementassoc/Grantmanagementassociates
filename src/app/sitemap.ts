import type { MetadataRoute } from "next";
import { services, industries, caseStudies, results, site } from "@/lib/content";
import { articles } from "@/lib/scraped-articles";

const newsletterSlugs = [
  "weekly-funding-digest-nov-2-6-2026",
  "weekly-funding-digest-oct-26-30-2026",
  "weekly-funding-digest-oct-19-23-2026",
  "weekly-funding-digest-oct-12-16-2026",
  "weekly-funding-digest-oct-5-9-2026",
  "weekly-funding-digest-sept-28-oct-2-2026",
  "weekly-funding-digest-sept-21-25-2026",
  "weekly-funding-digest-sept-14-18-2026",
  "weekly-funding-digest-sept-7-11-2026",
  "weekly-funding-digest-aug-31-sept-4-2026",
  "weekly-funding-digest-aug-24-28-2026",
  "weekly-funding-digest-aug-17-21-2026",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticPaths = [
    "",
    "/about/firm",
    "/about/team",
    "/about/clients",
    "/services",
    "/industries",
    "/case-studies",
    "/results",
    "/methodology",
    "/articles",
    "/newsletters",
    "/responsible-ai",
    "/assessment",
    "/contact",
    "/careers",
    "/partners",
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
    "/accessibility",
    "/sitemap",
  ];

  const dynamicPaths = [
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    ...results.map((r) => `/results/${r.slug}`),
    ...articles.map((a) => `/articles/${a.slug}`),
    ...newsletterSlugs.map((slug) => `/newsletters/${slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "daily" : p.startsWith("/articles") || p.startsWith("/newsletters") ? "weekly" : "monthly",
    priority: p === "" ? 1 : p.startsWith("/services") || p.startsWith("/results") ? 0.9 : 0.7,
  }));
}
