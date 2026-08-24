"use client";
import { useState, useEffect } from "react";

const LOGOS = [
  { name: "Berkshire Hathaway Energy", domain: "brkenergy.com" },
  { name: "Microporous", domain: "microporous.net" },
  { name: "Mainspring Energy", domain: "mainspringenergy.com" },
  { name: "Batteries Plus", domain: "batteriesplus.com" },
  { name: "Radius Recycling", domain: "radiusrecycling.com" },
  { name: "Atlanta Regional Commission", domain: "atlantaregional.org" },
  { name: "Xcimer Energy", domain: "xcimer.net" },
  { name: "ASHRAE", domain: "ashrae.org" },
  { name: "Spatial Informatics Group", domain: "sig-gis.com" },
  { name: "JMA Wireless", domain: "jmawireless.com" },
  { name: "Golden Empire Transit", domain: "getbus.org" },
  { name: "Carollo Engineers", domain: "carollo.com" },
];

function LogoItem({ logo }: { logo: typeof LOGOS[0] }) {
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (error) {
    return (
      <div className="text-muted hover:text-foreground transition-colors text-lg md:text-xl font-display tracking-tight opacity-70 hover:opacity-100 flex items-center h-12">
        {logo.name}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all dark:invert dark:opacity-80 dark:hover:opacity-100 dark:hover:invert-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${logo.domain}&size=128`}
        alt={logo.name}
        className="max-h-8 max-w-[140px] object-contain"
        onError={() => setError(true)}
      />
    </div>
  );
}

export function LogoTicker() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="relative overflow-hidden py-8 border-y border-black/5 dark:border-white/5 mask-fade bg-white/50 dark:bg-black/50 backdrop-blur-sm">
      <div className="flex gap-16 items-center animate-marquee-logos whitespace-nowrap">
        {items.map((logo, i) => (
          <LogoItem key={i} logo={logo} />
        ))}
      </div>
      <style>{`
        .mask-fade { mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent); }
      `}</style>
    </div>
  );
}
