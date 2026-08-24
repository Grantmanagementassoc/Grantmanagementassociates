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
      <Image 
        src="/logo-text.png" 
        alt="GRANT MANAGEMENT Associates" 
        width={200} 
        height={80} 
        className="object-contain h-[80%] w-auto dark:brightness-0 dark:invert transition-all" 
        priority
      />
    </div>
  );
}
