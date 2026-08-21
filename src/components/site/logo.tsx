export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" className="fill-foreground font-bold text-2xl tracking-tighter" style={{ fontFamily: "inherit" }}>GMA</text>
      <circle cx="58" cy="18" r="4" className="fill-cyan-400" />
    </svg>
  );
}
