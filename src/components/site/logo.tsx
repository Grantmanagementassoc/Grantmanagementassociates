import Image from "next/image";

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <Image 
        src="/logo.png" 
        alt="GMA Logo" 
        fill
        className="object-contain object-left invert dark:invert-0"
        priority
      />
    </div>
  );
}
