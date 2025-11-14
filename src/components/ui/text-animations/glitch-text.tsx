"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {glitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-red-500 opacity-70"
            style={{ clipPath: "inset(40% 0 60% 0)" }}
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 0.2 }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-blue-500 opacity-70"
            style={{ clipPath: "inset(60% 0 40% 0)" }}
            animate={{ x: [2, -2, 2] }}
            transition={{ duration: 0.2 }}
          >
            {text}
          </motion.span>
        </>
      )}
    </span>
  );
}

