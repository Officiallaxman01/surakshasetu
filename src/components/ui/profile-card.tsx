"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  image?: string;
  emoji?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  index?: number;
}

export function ProfileCard({ 
  name, 
  title, 
  description, 
  image,
  emoji,
  social,
  index = 0 
}: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-card via-card/95 to-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(255,0,0,0.25)]">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/10 transition-all duration-500 blur-xl -z-10" />
        
        {/* Card Content */}
        <div className="relative p-8 lg:p-10">
          {/* Profile Image/Avatar */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="relative w-40 h-40 mb-6">
              {image ? (
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center text-7xl border-4 border-primary/20 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-500">
                  {emoji || "👤"}
                </div>
              )}
              
              {/* Status indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-card flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>

            {/* Name with animated text */}
            <motion.h3 
              className="text-2xl font-bold text-white mb-2 font-monospace uppercase tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
            >
              {name.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h3>

            {/* Title */}
            <p className="text-primary text-sm font-monospace mb-4 uppercase tracking-wider">
              {title}
            </p>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Social Links */}
          {social && (
            <div className="flex items-center justify-center gap-3 pt-6 border-t border-border">
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group/social"
                >
                  <svg className="w-4 h-4 text-text-secondary group-hover/social:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group/social"
                >
                  <svg className="w-4 h-4 text-text-secondary group-hover/social:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group/social"
                >
                  <svg className="w-4 h-4 text-text-secondary group-hover/social:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Corner decoration */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/20 group-hover:border-primary/60 transition-colors" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/20 group-hover:border-primary/60 transition-colors" />
      </div>
    </motion.div>
  );
}

