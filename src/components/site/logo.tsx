import Image from "next/image";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-10 w-10 flex-shrink-0">
        <Image 
          src="/logo.png" 
          alt="GMA Logo" 
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="leading-none hidden sm:block">
        <div className="text-white font-semibold text-[15px] tracking-tight">GRANT MANAGEMENT</div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mt-1">Associates</div>
      </div>
    </div>
  );
}
