import Link from "next/link";
import { BackgroundGrid, Eyebrow } from "@/components/site/ui";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] pt-40 pb-24 overflow-hidden noise flex items-center">
      <BackgroundGrid />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Eyebrow>404 — page not found</Eyebrow>
        <h1 className="mt-6 text-6xl md:text-8xl font-semibold text-foreground leading-none">
          This page <br /><span className="text-gradient-brand">went to find funding.</span>
        </h1>
        <p className="mt-8 text-lg text-muted">
          It hasn't come back yet — but we have plenty of other places to explore.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">Return home →</Link>
          <Link href="/sitemap" className="btn-secondary">Browse sitemap</Link>
          <Link href="/contact" className="btn-ghost">Report a broken link</Link>
        </div>
      </div>
    </section>
  );
}
