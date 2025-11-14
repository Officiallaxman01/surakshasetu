"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SplitText, GradientText, GlitchText } from '@/components/ui/text-animations';
import { GlowingCursor } from '@/components/ui/animations/glowing-cursor';

const DecorativeCorners = () => (
  <>
    {/* Top left */}
    <div className="absolute top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-16">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 1H1V40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        <path d="M15 1H1" stroke="#FF0000" strokeWidth="2" />
      </svg>
    </div>
    {/* Top right */}
    <div className="absolute top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-16">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H39V40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        <path d="M25 1H39" stroke="#FF0000" strokeWidth="2" />
      </svg>
    </div>
    {/* Bottom left */}
    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 39H1V0" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        <path d="M1 25V39" stroke="#FF0000" strokeWidth="2" />
      </svg>
    </div>
    {/* Bottom right */}
    <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 39H39V0" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        <path d="M39 25V39" stroke="#FF0000" strokeWidth="2" />
      </svg>
    </div>
  </>
);

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] md:min-h-[800px] w-full overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/6887471d4a0e0e224c79a9f3_2F689233032dc5cf80340da4c-12.jpg"
        >
          <source src="https://cdn.prod.website-files.com/6887471d4a0e0e224c79a9f3/689233032dc5cf80340da4c8_7114291_Advance_Matrix_Simulation_3840x2160-transcode.webm" type="video/webm" />
          <source src="https://cdn.prod.website-files.com/6887471d4a0e0e224c79a9f3/689233032dc5cf80340da4c8_7114291_Advance_Matrix_Simulation_3840x2160-transcode.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Decorative Corners */}
      <DecorativeCorners />

      {/* Animated particles overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Glowing Cursor Effect */}
      <GlowingCursor color="#FF0000" size={20} />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center py-20 md:py-24">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-end w-full gap-8">
            {/* Main Content */}
            <div className="max-w-[900px] w-full">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-monospace text-white uppercase text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-bold leading-[1.15] tracking-[-0.02em] mb-6"
              >
                <SplitText text="AI-POWERED " delay={0} duration={0.03} />
                <GradientText text="FRAUD DETECTION" colors={["#FF0000", "#FF4444", "#FF0000"]} />
                <SplitText text=" & " delay={0.5} duration={0.02} />
                <GlitchText text="CYBERSECURITY" />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-text-secondary text-base md:text-lg lg:text-xl max-w-[600px] mb-8 md:mb-10 leading-relaxed"
              >
                Enterprise-grade AI-powered fraud detection platform. Real-time protection from email fraud (phishing, spam, malware), SMS/call scams, financial fraud (payment, banking, investment, crypto), and cyber threats. 95%+ accuracy, sub-100ms latency, instant multi-channel alerts via mobile app, web dashboard, and WhatsApp bot. Blockchain forensics and 4-layer honeypot defense.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="relative overflow-hidden group inline-block text-center sm:text-left"
                >
                  <span className="btn-text inline-block py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base bg-primary text-primary-foreground transition-all duration-300 hover:bg-[#e60000] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,0,0,0.4)] w-full sm:w-auto">
                    CONTACT US
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
                <Link
                  href="/services"
                  className="btn-text inline-block py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base text-center sm:text-left bg-transparent text-foreground border border-white/20 transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] w-full sm:w-auto"
                >
                  SEE OUR SERVICES
                </Link>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden xl:flex flex-col items-start gap-2">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-monospace text-sm text-text-secondary uppercase tracking-wider"
              >
                SCROLL DOWN
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="font-monospace text-sm text-text-muted"
              >
                / SurakshaSetu
              </motion.p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mt-4"
              >
                <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
                  <path
                    d="M10 5L10 25M10 25L5 20M10 25L15 20"
                    stroke="#FF0000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;