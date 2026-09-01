"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";
import { GlassCard } from "@/components/site/ui";

type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  icon: string;
};

export function ServicesFlowchart({ services }: { services: Service[] }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 15 
      } 
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    show: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  const mobileLineVariants: Variants = {
    hidden: { scaleY: 0, opacity: 0 },
    show: { 
      scaleY: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <div className="w-full py-10 relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-4 relative w-full"
      >
        {services.map((s, index) => {
          const IconComponent = Icons[s.icon as keyof typeof Icons] as React.ElementType;
          const isEven = index % 2 === 0;
          
          return (
            <motion.div 
              key={s.slug} 
              variants={itemVariants}
              className={`relative z-10 w-full max-w-sm lg:w-[280px] xl:w-[320px] shrink-0 flex ${
                isEven ? "lg:mt-0" : "lg:mt-16"
              }`}
            >
              {index < services.length - 1 && (
                <motion.div 
                  variants={lineVariants}
                  className="hidden lg:block absolute top-[120px] -right-[50%] w-full h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent origin-left z-[-1]" 
                />
              )}
              {index < services.length - 1 && (
                <motion.div 
                  variants={mobileLineVariants}
                  className="block lg:hidden absolute -bottom-[20px] left-1/2 w-[2px] h-[40px] bg-gradient-to-b from-cyan-500/50 to-transparent origin-top z-[-1]" 
                />
              )}

              <Link href={`/services/${s.slug}`} className="group block w-full h-full">
                <GlassCard stretch={true} className="h-full flex flex-col items-center text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.2)]">
                  <div className="h-16 w-16 rounded-full bg-cyan-950/40 border border-cyan-800/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 shadow-inner">
                    {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
                  </div>
                  
                  <div className="font-mono text-xs text-cyan-500 mb-2">PHASE 0{index + 1}</div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-cyan-300 transition-colors">
                    {s.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-cyan-300/80 font-medium">
                    {s.tagline}
                  </p>
                  
                  <p className="mt-4 text-sm text-muted leading-relaxed line-clamp-3">
                    {s.summary}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/5 text-xs text-cyan-400 flex items-center gap-1 w-full justify-center group-hover:text-cyan-300">
                    Explore service <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
