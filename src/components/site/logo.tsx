import Image from "next/image";

export function Logo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image 
        src="/new-logo.png" 
        alt="GMA Logo" 
        width={160} 
        height={160} 
        className="object-contain h-full w-auto" 
        priority
      />
    </div>
  );
}
