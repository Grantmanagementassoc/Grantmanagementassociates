import type { MetadataRoute } from "next";
import { services, industries, caseStudies, resources, openRoles, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/industries",
    "/case-studies",
    "/resources",
    "/responsible-ai",
    "/assessment",
    "/contact",
    "/careers",
    "/partners",
    "/privacy-policy",
    "/terms",
    "/accessibility",
    "/sitemap",
  ];
  const dyn = [
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    ...resources.map((r) => `/resources/${r.slug}`),
    ...openRoles.map((r) => `/careers/${r.slug}`),
  ];
  return [...staticPaths, ...dyn].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}
