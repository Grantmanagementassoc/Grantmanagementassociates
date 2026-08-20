"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNav, site } from "@/lib/content";
import { Logo } from "./logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  if (pathname.startsWith("/admin")) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong border-b border-black/5 dark:border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 flex items-center justify-between h-20 md:h-24">
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0" aria-label="GMA home">
          <Logo className="w-64 h-12 md:w-72 md:h-14" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {primaryNav.map((item) => {
            const hasChildren = !!item.children?.length;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href ?? "#"}
                  className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    pathname === item.href ? "text-foreground bg-black/5 dark:bg-white/10" : "text-muted hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {hasChildren && <span className="ml-1 text-[10px] opacity-60">▾</span>}
                </Link>
                {hasChildren && openMenu === item.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px]">
                    <div className="bg-background border border-black/5 dark:border-glass-border rounded-2xl p-4 grid grid-cols-2 gap-1 shadow-2xl">
                      {item.children!.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-xl p-3 hover:bg-black/5 dark:bg-white/5 transition-colors"
                        >
                          <div className="text-sm font-medium text-foreground">{c.label}</div>
                          {c.description && (
                            <div className="text-xs text-muted mt-1 leading-relaxed">{c.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <ThemeToggle />
          <Link href="/contact" className="btn-secondary text-sm whitespace-nowrap">Contact</Link>
          <Link href="/assessment" className="btn-primary text-sm whitespace-nowrap">Free Strategy Call →</Link>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative">
            <span className={`absolute left-0 h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "top-2 rotate-45" : "top-0"}`}></span>
            <span className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`absolute left-0 h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "top-2 -rotate-45" : "top-4"}`}></span>
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-black/5 dark:border-glass-border max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            {primaryNav.map((item) => (
              <div key={item.label} className="border-b border-black/5 dark:border-black/5 dark:border-white/5 last:border-0 py-2">
                <Link href={item.href ?? "#"} className="block py-2 text-foreground font-medium">{item.label}</Link>
                {item.children && (
                  <div className="pl-3 space-y-1">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block py-1.5 text-sm text-muted hover:text-foreground">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Link href="/contact" className="btn-secondary justify-center">Contact</Link>
              <Link href="/assessment" className="btn-primary justify-center">Free Strategy Call →</Link>
            </div>
            <div className="pt-4 text-xs text-muted">
              <a href={site.phoneHref} className="block hover:text-foreground">{site.phone}</a>
              <a href={site.emailHref} className="block hover:text-foreground">{site.email}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
