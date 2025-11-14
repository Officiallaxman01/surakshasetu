"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoLoopProps {
  logos: { src: string; alt: string; }[];
  duration?: number;
  className?: string;
}

export function LogoLoop({ logos, duration = 20, className = "" }: LogoLoopProps) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: [0, -50 + "%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

