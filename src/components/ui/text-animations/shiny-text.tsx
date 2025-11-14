"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

interface ShinyTextProps {
  text: string;
  className?: string;
  shimmerWidth?: number;
}

export function ShinyText({ text, className = "", shimmerWidth = 100 }: ShinyTextProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)`,
          backgroundSize: `${shimmerWidth}px 100%`,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.span>
  );
}

