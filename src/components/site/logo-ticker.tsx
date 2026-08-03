const LOGOS = [
  "Berkshire Hathaway Energy",
  "MidAmerican Energy",
  "Microporous",
  "JMA Wireless",
  "Golden Empire Transit",
  "Carollo Engineers",
  "MP Assets",
  "Regional AMC",
];

export function LogoTicker() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="relative overflow-hidden py-8 border-y border-white/5 mask-fade">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {items.map((logo, i) => (
          <div
            key={i}
            className="text-slate-500 hover:text-white transition-colors text-lg md:text-xl font-display tracking-tight opacity-70 hover:opacity-100"
          >
            {logo}
          </div>
        ))}
      </div>
      <style>{`
        .mask-fade { mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent); }
      `}</style>
    </div>
  );
}
