"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getSupabaseImageUrl, IMAGE_PATHS } from '@/lib/constants';

const DecorativeCorners = () => (
  <>
    <div className="absolute top-0 left-0">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 1H1V40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
      </svg>
    </div>
    <div className="absolute top-0 right-0">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H39V40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
      </svg>
    </div>
    <div className="absolute bottom-0 left-0">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 39H1V0" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
      </svg>
    </div>
    <div className="absolute bottom-0 right-0">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 39H39V0" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
      </svg>
    </div>
  </>
);

const AboutUsSection = () => {
  return (
    <section
      id="About-Section"
      className="relative bg-black py-16 md:py-20 lg:py-[120px] overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,0,0,0.03)] to-transparent" />

      <div className="container relative z-10">
        <div className="relative">
          <DecorativeCorners />
          
          <div className="flex flex-col items-center text-center px-4 md:px-8 lg:px-16">
            {/* Section Header */}
            <div className="max-w-4xl mb-12 lg:mb-16">
              <p className="sub-title mb-4">/ about us</p>
              <h2 className="h2 mb-8">ENTERPRISE-GRADE AI-POWERED CYBERSECURITY PLATFORM</h2>
            </div>
            
            {/* Description Text - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mb-12 lg:mb-16 text-left">
              <p className="text-base lg:text-lg leading-relaxed text-text-secondary">
                SurakshaSetu is a comprehensive cybersecurity ecosystem that protects users from email fraud, SMS/call fraud, financial fraud, and cyber threats. Our platform combines advanced machine learning models, real-time threat intelligence, and multi-layer security architecture.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-text-secondary">
                With seamless integration across mobile app, web dashboard, and WhatsApp bot, we deliver instant alerts and automated forensic evidence collection. Our AI-powered detection engine provides sub-100ms latency with 95%+ accuracy.
              </p>
            </div>
            
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl">
              {/* Mission Card */}
              <MissionVisionCard
                title="MISSION"
                description="To provide real-time, AI-powered fraud detection and cybersecurity protection that instantly alerts users via multiple channels, collects forensic evidence, and prevents attacks through multi-layer security architecture."
                index={0}
              />
              {/* Vision Card */}
              <MissionVisionCard
                title="VISION"
                description="To be the leading AI-powered cybersecurity platform trusted by individuals, businesses, financial institutions, and government organizations for comprehensive fraud detection and threat protection."
                index={1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionVisionCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card/90 to-card backdrop-blur-sm p-8 lg:p-12 text-left transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,0,0,0.2)]"
    >
                <Image
                  src={getSupabaseImageUrl(IMAGE_PATHS.aboutCardPattern)}
                  alt=""
                  fill
                  className="absolute inset-0 object-cover opacity-[0.04]"
                  aria-hidden="true"
                />
      <Image
        src={getSupabaseImageUrl(IMAGE_PATHS.aboutCardPattern)}
        alt=""
        fill
        className="absolute inset-0 object-cover opacity-[0.04]"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <h3 className="font-monospace text-2xl lg:text-3xl font-bold mb-6 text-white uppercase">
          {title}
        </h3>
        <p className="text-base lg:text-lg leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUsSection;