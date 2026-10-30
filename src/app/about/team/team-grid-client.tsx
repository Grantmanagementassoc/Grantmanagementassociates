"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/site/scroll-reveal";

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

function TeamCard({ member, onClick, large }: { member: TeamMember; onClick: () => void; large?: boolean }) {
  const cardH = large ? "h-[480px]" : "h-[390px]";
  const imgH = large ? "h-[370px]" : "h-[280px]";
  const nameSize = large ? "text-xl" : "text-base";

  return (
    <div
      className={`group relative flex flex-col rounded-xl overflow-hidden bg-[#0a0a0a] border border-glass-border hover:border-cyan-500/50 transition-all cursor-pointer shadow-lg hover:shadow-cyan-900/20 ${cardH} w-full`}
      onClick={onClick}
    >
      <div className={`relative w-full ${imgH} overflow-hidden bg-slate-900`}>
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl text-white/20 font-bold">
            {member.name.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-6 py-2 bg-black/80 backdrop-blur-sm text-white border border-white/20 rounded-full text-sm font-semibold tracking-wide uppercase">
            View Profile
          </span>
        </div>
      </div>
      <div className="flex-1 p-4 bg-black flex flex-col items-start justify-center">
        <h3 className={`${nameSize} font-bold text-white line-clamp-2 leading-snug`}>{member.name}</h3>
        <p className="text-sm text-cyan-400 mt-1 line-clamp-2 leading-snug">{member.role}</p>
      </div>
    </div>
  );
}

export function TeamGridClient({ team }: { team: TeamMember[] }) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const ceo = team[0];
  const rest = team.slice(1);

  // Dynamic grid classes matching exact item count so there are never empty gaps
  const gridColsClass =
    rest.length === 1
      ? "grid-cols-1 max-w-sm mx-auto"
      : rest.length === 2
      ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
      : rest.length === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
      : rest.length === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
      : rest.length === 5
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6";

  const treeColsClass =
    rest.length === 1
      ? "grid-cols-1 max-w-sm mx-auto"
      : rest.length === 2
      ? "grid-cols-2 max-w-2xl mx-auto"
      : rest.length === 3
      ? "grid-cols-3 max-w-4xl mx-auto"
      : rest.length === 4
      ? "grid-cols-4 max-w-5xl mx-auto"
      : rest.length === 5
      ? "grid-cols-5"
      : "grid-cols-6";

  return (
    <>
      <div className="w-full max-w-7xl mx-auto mt-12 flex flex-col items-center">
        {/* CEO — top of the tree */}
        <ScrollReveal>
          <div className="w-[280px] md:w-[300px]">
            <TeamCard member={ceo} onClick={() => setSelectedMember(ceo)} large />
          </div>
        </ScrollReveal>

        {/* Vertical trunk line from CEO down */}
        <div className="hidden lg:block w-px h-10 bg-gradient-to-b from-cyan-500/60 to-glass-border" />

        {/* Horizontal branch line & drop lines — matches cards grid with exact pixel alignment */}
        <div className={`hidden lg:grid ${treeColsClass} gap-6 w-full h-8 relative`}>
          {rest.map((_, i) => (
            <div key={i} className="relative h-full flex justify-center">
              {/* Drop line from horizontal branch down to card */}
              <div className="w-px h-full bg-glass-border" />

              {/* Branch connecting to left column */}
              {i > 0 && (
                <div className="absolute top-0 right-1/2 w-[calc(50%+12px)] h-px bg-glass-border" />
              )}

              {/* Branch connecting to right column */}
              {i < rest.length - 1 && (
                <div className="absolute top-0 left-1/2 w-[calc(50%+12px)] h-px bg-glass-border" />
              )}
            </div>
          ))}
        </div>

        {/* Remaining team members in a row */}
        <div className={`grid gap-6 w-full mt-8 lg:mt-0 ${gridColsClass}`}>
          {rest.map((m, idx) => (
            <ScrollReveal
              key={idx}
              className={
                rest.length === 5 && idx === 4
                  ? "sm:col-span-2 lg:col-span-1 sm:w-full sm:max-w-[calc(50%-12px)] lg:max-w-none sm:mx-auto lg:mx-0"
                  : ""
              }
            >
              <TeamCard member={m} onClick={() => setSelectedMember(m)} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0a0a0a] border border-glass-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
              onClick={() => setSelectedMember(null)}
              aria-label="Close"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="overflow-y-auto p-6 md:p-10 flex flex-col md:flex-row gap-8">
              <div className="shrink-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden bg-slate-900 border border-glass-border shadow-lg">
                  {selectedMember.image ? (
                    <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover object-top" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl text-white/20 font-bold">
                      {selectedMember.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                <div className="text-cyan-400 font-semibold tracking-wide uppercase mb-6">{selectedMember.role}</div>
                <div
                  className="prose prose-invert prose-p:my-4 prose-h3:text-cyan-300 prose-h3:text-xl text-muted leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedMember.bio || "" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
