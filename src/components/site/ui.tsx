import Link from "next/link";
import type { ReactNode } from "react";
import { AnimatedNumber } from "./animated-number";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass-border bg-black/5 dark:bg-black/5 dark:bg-white/5 text-[11px] uppercase tracking-[0.18em] text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow animate-pulse-glow" />
      {children}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground leading-[1.05]">{title}</h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`glass rounded-2xl p-6 ${hover ? "card-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Stat({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-3xl md:text-5xl font-semibold text-foreground">
        <span className="text-gradient-brand"><AnimatedNumber value={value} /></span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted">{label}</div>
      {sub && <div className="mt-1 text-xs text-muted">{sub}</div>}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-xs text-muted mb-6" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {it.href ? (
              <Link href={it.href} className="hover:text-foreground transition-colors">{it.label}</Link>
            ) : (
              <span className="text-foreground">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="text-muted">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-black/5 dark:divide-white/5 border-y border-black/5 dark:border-black/5 dark:border-white/5">
      {items.map((it, i) => (
        <details key={i} className="group py-5">
          <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
            <span className="text-foreground font-medium text-base md:text-lg">{it.q}</span>
            <span className="text-muted group-open:rotate-45 transition-transform text-xl">+</span>
          </summary>
          <p className="mt-3 text-muted leading-relaxed">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CTACard({
  title,
  subtitle,
  primary,
  secondary,
}: {
  title: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-glass-border bg-glass-bg p-10 md:p-14">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-glow/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-sapphire/10 blur-3xl" />
      <div className="relative grid md:grid-cols-[1.5fr_1fr] gap-8 items-end">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight">{title}</h2>
          <p className="mt-4 text-muted max-w-xl">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link href={primary.href} className="btn-primary">{primary.label}</Link>
          {secondary && (
            <Link href={secondary.href} className="btn-secondary">{secondary.label}</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function BackgroundGrid() {
  return (
    <>
      <div className="absolute inset-0 grid-lines opacity-10 dark:opacity-40 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" aria-hidden />
    </>
  );
}
