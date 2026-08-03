export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="36" height="36" rx="10" fill="url(#lg1)" opacity="0.15" />
        <rect x="2" y="2" width="36" height="36" rx="10" fill="none" stroke="url(#lg1)" strokeWidth="1.5" />
        <path
          d="M12 25 L12 15 L20 15 M12 20 L18 20 M23 25 L28 15 L33 25 M25 22 L31 22"
          stroke="url(#lg1)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="leading-none">
        <div className="text-white font-semibold text-[15px] tracking-tight">GMA</div>
        <div className="text-[9px] uppercase tracking-[0.18em] text-slate-400 mt-0.5">Grant Mgmt Assoc.</div>
      </div>
    </div>
  );
}
