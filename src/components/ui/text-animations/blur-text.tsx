"use client";

import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function BlurText({ text, className = "", delay = 0 }: BlurTextProps) {
  return (
    <motion.span
      initial={{ filter: "blur(10px)", opacity: 0 }}
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {text}
    </motion.span>
  );
}

