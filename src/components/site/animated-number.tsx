"use client";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!isInView || !ref.current) return;
    
    const numMatch = value.match(/[\d,.]+/);
    if (!numMatch) {
      ref.current.textContent = value;
      return;
    }
    
    const numStr = numMatch[0];
    const isFloat = numStr.includes(".");
    const targetNum = parseFloat(numStr.replace(/,/g, ""));
    const prefix = value.substring(0, value.indexOf(numStr));
    const suffix = value.substring(value.indexOf(numStr) + numStr.length);
    
    const duration = 1000;
    let startTime: number | null = null;
    
    const update = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easedProgress * targetNum;
      
      let formatted = "";
      if (isFloat) {
        formatted = current.toFixed(1);
      } else {
        formatted = Math.round(current).toLocaleString();
      }
      
      if (ref.current) {
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else if (ref.current) {
        ref.current.textContent = value;
      }
    };
    
    requestAnimationFrame(update);
  }, [value, isInView]);

  return <span ref={ref}>0</span>;
}
