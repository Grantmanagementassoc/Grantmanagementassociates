"use client";

import { useState } from "react";

export function ClientLogoCard({ client }: { client: { name: string; domain?: string } }) {
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 p-6 glass rounded-2xl border border-glass-border card-hover hover:border-cyan-300/50 transition-colors bg-white/5 dark:bg-white/5 backdrop-blur-md h-40">
      {client.domain && !error ? (
        <div className="w-16 h-16 flex items-center justify-center shrink-0 dark:bg-white/90 dark:p-1.5 dark:rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://logo.clearbit.com/${client.domain}`}
            alt={client.name}
            className="max-h-full max-w-full object-contain"
            onError={() => setError(true)}
          />
        </div>
      ) : (
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-sapphire/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold text-xl shrink-0">
          {client.name.charAt(0).toUpperCase()}
        </div>
      )}
      <div className="text-sm font-semibold text-foreground leading-tight">{client.name}</div>
    </div>
  );
}
