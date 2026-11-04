"use client";
import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px", amount: 0.1 });
  const prefersReducedMotion = useReducedMotion();
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || !ref.current || animatedRef.current || prefersReducedMotion) return;

    const numMatch = value.match(/[\d,.]+/);
    if (!numMatch) {
      ref.current.textContent = value;
      return;
    }

    animatedRef.current = true;
    const numStr = numMatch[0];
    const isFloat = numStr.includes(".");
    const targetNum = parseFloat(numStr.replace(/,/g, ""));
    const prefix = value.substring(0, value.indexOf(numStr));
    const suffix = value.substring(value.indexOf(numStr) + numStr.length);

    const duration = 900;
    let startTime: number | null = null;
    let frameId: number;

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
        frameId = requestAnimationFrame(update);
      } else if (ref.current) {
        ref.current.textContent = value;
      }
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [value, isInView, prefersReducedMotion]);

  // Server-rendered HTML and initial client render always show the actual stat value, never "0"
  return <span ref={ref}>{value}</span>;
}
