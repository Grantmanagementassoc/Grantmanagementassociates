import Image from "next/image";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image 
        src="/globe.png" 
        alt="GMA Globe" 
        width={80} 
        height={80} 
        className="object-contain h-full w-auto drop-shadow-sm" 
        priority
      />
      <div className="flex flex-col justify-center leading-none uppercase select-none">
        <span className="text-[15px] sm:text-[17px] md:text-[19px] font-bold font-serif tracking-widest text-foreground">
          Grant Management
        </span>
        <span className="text-[10px] sm:text-[11px] md:text-[12px] font-medium font-sans tracking-[0.3em] text-foreground/80 mt-[2px] ml-[1px]">
          Associates
        </span>
      </div>
    </div>
  );
}
