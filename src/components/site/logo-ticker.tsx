"use client";
import { useState, useEffect } from "react";

const LOGOS = [
  { name: "San Jose Water", domain: "sjwater.com" },
  { name: "American Honda", domain: "honda.com" },
  { name: "ASHRAE", domain: "ashrae.org" },
  { name: "Kubota", domain: "kubota.com" },
  { name: "BARCO", domain: "barco.com" },
  { name: "Berkshire Hathaway Energy", domain: "brkenergy.com" },
  { name: "Bosch", domain: "bosch.com" },
  { name: "Butte County", domain: "bcag.org" },
  { name: "CalSEED", domain: "calseed.fund" },
  { name: "CALSTART", domain: "calstart.org" },
  { name: "ChargePoint", domain: "chargepoint.com" },
  { name: "Chevron", domain: "chevron.com" },
  { name: "City of Bakersfield", domain: "bakersfieldcity.us" },
  { name: "City of Chico", domain: "chico.ca.us" },
  { name: "City of Lake Worth Beach", domain: "lakeworthbeachfl.gov" },
  { name: "EJ Water", domain: "ejwatercoop.com" },
  { name: "El Dorado County", domain: "edcgov.us" },
  { name: "Exodigo", domain: "exodigo.com" },
  { name: "Great River Energy", domain: "greatriverenergy.com" },
  { name: "Honeywell", domain: "honeywell.com" },
  { name: "Iowa DOT", domain: "iowadot.gov" },
  { name: "Irwin Industries", domain: "irwinindustries.com" },
  { name: "JMA Wireless", domain: "jmawireless.com" },
  { name: "LA DOT", domain: "ladot.lacity.org" },
  { name: "Microporous", domain: "microporous.net" },
  { name: "MidAmerican Energy", domain: "midamericanenergy.com" },
  { name: "GET Bus", domain: "getbus.org" },
  { name: "Banner Public Affairs", domain: "bannerpublicaffairs.com" },
  { name: "Volvo", domain: "volvocars.com" },
  { name: "Wrightspeed", domain: "wrightspeed.com" },
  { name: "Xcimer Energy", domain: "xcimer.net" },
  { name: "UC Riverside", domain: "ucr.edu" },
  { name: "Tesla", domain: "tesla.com" },
  { name: "Shasta RTA", domain: "srta.ca.gov" },
  { name: "Shell", domain: "shell.com" },
  { name: "Engie", domain: "engie.com" },
  { name: "PepsiCo", domain: "pepsico.com" },
  { name: "Lassen MUD", domain: "lmud.org" },
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
