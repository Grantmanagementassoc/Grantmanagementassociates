"use client";

import { motion, Variants } from "framer-motion";

export function ProcessTimeline({ steps }: { steps: string[] }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      } 
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    show: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 0.4 }
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 relative w-full"
    >
      {/* Background connecting line (Desktop only) */}
      <motion.div 
        variants={lineVariants}
        className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-cyan-900/30 -translate-y-1/2 origin-left z-[-1]"
      />

      {steps.map((step, i) => (
        <motion.div 
          key={step} 
          variants={itemVariants}
          className="relative glass rounded-full w-full md:w-32 h-32 flex flex-col items-center justify-center border-2 border-transparent hover:border-cyan-500/50 transition-colors duration-300 shadow-lg bg-black/40 backdrop-blur-md shrink-0"
        >
          <div className="font-mono text-xs text-cyan-400 mb-1">0{i + 1}</div>
          <div className="text-lg font-semibold text-foreground">{step}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
