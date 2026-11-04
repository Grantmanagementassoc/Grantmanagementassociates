"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function ScrollReveal({ 
  children, 
  className = "",
  delay = 0,
  animation = "fade-up",
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale-up" | "fade-in";
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    "fade-up": { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 } },
    "slide-left": { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 } },
    "slide-right": { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 } },
    "scale-up": { initial: { opacity: 0, scale: 0.98 }, whileInView: { opacity: 1, scale: 1 } },
    "fade-in": { initial: { opacity: 0 }, whileInView: { opacity: 1 } },
  };

  const { initial, whileInView } = variants[animation];

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "0px", amount: 0.05 }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
