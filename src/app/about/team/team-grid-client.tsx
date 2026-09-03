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
  const cardH = large ? "h-[480px]" : "h-[380px]";
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
        <h3 className={`${nameSize} font-bold text-white line-clamp-1`}>{member.name}</h3>
        <p className="text-sm text-cyan-400 mt-1 line-clamp-2">{member.role}</p>
      </div>
    </div>
  );
}

export function TeamGridClient({ team }: { team: TeamMember[] }) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const ceo = team[0];
  const rest = team.slice(1);

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
        <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-cyan-500/60 to-glass-border" />

        {/* Horizontal branch line */}
        <div className="hidden lg:block relative w-full max-w-[85%] h-px bg-glass-border">
          {/* Drop lines for each column */}
          {rest.map((_, i) => {
            const pos = rest.length === 1 ? 50 : (i / (rest.length - 1)) * 100;
            return (
              <div
                key={i}
                className="absolute top-0 w-px h-8 bg-glass-border"
                style={{ left: `${pos}%` }}
              />
            );
          })}
        </div>

        {/* Remaining team members in a row */}
        <div className={`grid gap-6 w-full mt-8 lg:mt-0 ${
          rest.length <= 3
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : rest.length <= 4
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : rest.length <= 6
            ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        }`}>
          {rest.map((m, idx) => (
            <ScrollReveal key={idx}>
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
