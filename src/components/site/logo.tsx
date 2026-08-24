import Image from "next/image";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image 
      src="/logo.png" 
      alt="GMA Logo" 
      width={400} 
      height={120} 
      className={className + " object-contain"} 
      priority
    />
  );
}
