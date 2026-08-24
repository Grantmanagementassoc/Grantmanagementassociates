"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerNav, site } from "@/lib/content";
import { Logo } from "./logo";
import { NewsletterForm } from "./newsletter-form";

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return (
    <footer className="relative mt-32 border-t border-black/5 dark:border-white/5 bg-gradient-to-b from-transparent to-black">
      <div className="absolute inset-x-0 top-0 h-px divider-fade" />
      <div className="mx-auto max-w-[1600px] px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo className="h-9" />
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-sm">
              Funding intelligence and strategy since {site.founded}. Over{" "}
              <span className="text-foreground font-medium">{site.totalSecured}</span> secured for organizations at every scale.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.certifications.map((c) => (
                <span key={c} className="text-[10px] uppercase tracking-widest text-muted border border-glass-border rounded-full px-3 py-1">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs uppercase tracking-widest text-muted mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-muted hover:text-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-fade my-10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={site.social.linkedin} aria-label="LinkedIn" className="text-muted hover:text-foreground transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
            </a>
            <a href={site.social.twitter} aria-label="Twitter" className="text-muted hover:text-foreground transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={site.social.facebook} aria-label="Facebook" className="text-muted hover:text-foreground transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z"/></svg>
            </a>
          </div>
          <div className="text-xs text-muted space-x-4">
            <a href={site.phoneHref} className="hover:text-foreground">{site.phone}</a>
            <a href={site.emailHref} className="hover:text-foreground">{site.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
