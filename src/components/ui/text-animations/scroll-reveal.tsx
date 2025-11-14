"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  text: string;
  className?: string;
}

export function ScrollReveal({ text, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <motion.span
      ref={ref}
      style={{ opacity, y }}
      className={`inline-block ${className}`}
    >
      {text}
    </motion.span>
  );
}

