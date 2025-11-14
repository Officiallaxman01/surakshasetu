"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  text: string;
  className?: string;
  colors?: string[];
}

export function GradientText({ 
  text, 
  className = "", 
  colors = ["#FF0000", "#FF6B6B", "#FF0000"] 
}: GradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
        backgroundSize: "200% 100%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  );
}

