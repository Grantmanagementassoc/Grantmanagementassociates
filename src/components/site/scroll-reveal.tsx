"use client";

import { motion } from "framer-motion";
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
  const variants = {
    "fade-up": { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } },
    "slide-left": { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 } },
    "slide-right": { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 } },
    "scale-up": { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 } },
    "fade-in": { initial: { opacity: 0 }, whileInView: { opacity: 1 } },
  };

  const { initial, whileInView } = variants[animation];

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
