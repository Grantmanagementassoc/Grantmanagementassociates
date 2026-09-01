"use client";

import { motion, Variants } from "framer-motion";
import { GlassCard } from "@/components/site/ui";

type ProcessStep = {
  title: string;
  body: string;
};

export function ServiceProcessFlowchart({ steps }: { steps: ProcessStep[] }) {
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
    <div className="w-full py-10 relative overflow-x-auto hide-scrollbar pb-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row items-center lg:items-stretch justify-start lg:justify-center gap-8 lg:gap-4 relative w-full lg:min-w-max px-4"
      >
        {steps.map((step, index) => {
          return (
            <motion.div 
              key={step.title} 
              variants={itemVariants}
              className={`relative z-10 w-full max-w-sm lg:w-[280px] xl:w-[320px] shrink-0 flex lg:mt-0`}
            >
              {index < steps.length - 1 && (
                <motion.div 
                  variants={lineVariants}
                  className="hidden lg:block absolute top-[60px] -right-[50%] w-full h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent origin-left z-[-1]" 
                />
              )}
              {index < steps.length - 1 && (
                <motion.div 
                  variants={mobileLineVariants}
                  className="block lg:hidden absolute -bottom-[20px] left-1/2 w-[2px] h-[40px] bg-gradient-to-b from-cyan-500/50 to-transparent origin-top z-[-1]" 
                />
              )}

              <GlassCard className="w-full h-full flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.2)]">
                <div className="h-12 w-12 rounded-full bg-cyan-950/40 border border-cyan-800/30 flex items-center justify-center text-cyan-400 mb-6 font-mono text-sm shadow-inner group-hover:scale-110 transition-transform">
                  0{index + 1}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                
                <p className="mt-4 text-sm text-muted leading-relaxed">
                  {step.body}
                </p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
