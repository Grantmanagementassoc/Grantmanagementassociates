"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (!isInView) return;
    
    // Extract number and formatting
    const numMatch = value.match(/[\d,.]+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }
    
    const numStr = numMatch[0];
    const isFloat = numStr.includes(".");
    const targetNum = parseFloat(numStr.replace(/,/g, ""));
    const prefix = value.substring(0, value.indexOf(numStr));
    const suffix = value.substring(value.indexOf(numStr) + numStr.length);
    
    const duration = 1000; // 1 second
    const frames = 60; // 60 frames
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      // Easing function (easeOutExpo) for smoother animation
      const progress = frame === frames ? 1 : 1 - Math.pow(2, -10 * (frame / frames));
      const current = progress * targetNum;
      
      let formatted = "";
      if (isFloat) {
        formatted = current.toFixed(1);
      } else {
        formatted = Math.round(current).toLocaleString();
      }
      
      setDisplayValue(`${prefix}${formatted}${suffix}`);
      
      if (frame === frames) {
        clearInterval(counter);
        setDisplayValue(value); // Ensure exact final value
      }
    }, duration / frames);
    
    return () => clearInterval(counter);
  }, [value, isInView]);

  return <span ref={ref}>{displayValue}</span>;
}
