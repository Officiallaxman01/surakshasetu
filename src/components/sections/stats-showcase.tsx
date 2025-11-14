"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NumberFlow from "@number-flow/react";
import { Shield, Zap, Brain, Globe, TrendingUp, Activity } from "lucide-react";
import { GradientText, ShinyText } from "@/components/ui/text-animations";
import { CountUp } from "@/components/ui/text-animations/count-up";

const stats = [
  {
    icon: Shield,
    value: 95,
    suffix: "%+",
    label: "Fraud Detection Accuracy",
    description: "Advanced ML models with ensemble methods",
    color: "text-primary",
  },
  {
    icon: Zap,
    value: 100,
    suffix: "ms",
    prefix: "<",
    label: "AI Inference Latency",
    description: "Sub-100ms real-time threat analysis",
    color: "text-blue-400",
  },
  {
    icon: Brain,
    value: 4,
    suffix: "-Layer",
    label: "Honeypot Defense",
    description: "Multi-layer security architecture",
    color: "text-purple-400",
  },
  {
    icon: Globe,
    value: 24,
    suffix: "/7",
    label: "Real-Time Monitoring",
    description: "Continuous threat detection and alerts",
    color: "text-green-400",
  },
];

const StatsShowcase = () => {
  return (
    <section className="relative bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,0,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,0,0,0.1),transparent_50%)]" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,0,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,0,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="sub-title mb-4"
          >
            / performance metrics
          </motion.p>
          <h2 className="h2 mb-4 md:mb-6">
            <GradientText 
              text="REAL-TIME PERFORMANCE METRICS" 
              colors={["#FFFFFF", "#FF0000", "#FFFFFF"]} 
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-text-secondary text-base md:text-lg max-w-3xl mx-auto px-4"
          >
            Enterprise-grade performance with industry-leading accuracy and speed
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                
                <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 border-2 border-border rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(255,0,0,0.25)] overflow-hidden">
                  {/* Animated corner decorations */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary/30 group-hover:border-primary/70 transition-colors duration-300" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary/30 group-hover:border-primary/70 transition-colors duration-300" />
                  
                  {/* Animated background pulse */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative flex flex-col items-center text-center">
                    {/* Icon with animation */}
                    <motion.div
                      className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-500 ${stat.color}`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                    </motion.div>

                    {/* Number with enhanced animation */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center gap-1 sm:gap-2">
                        {stat.prefix && (
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.15 + 0.3 }}
                            className="text-3xl sm:text-4xl font-bold text-white font-monospace"
                          >
                            {stat.prefix}
                          </motion.span>
                        )}
                        {inView ? (
                          <NumberFlow
                            value={stat.value}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-monospace"
                            format={{ maximumFractionDigits: 0 }}
                          />
                        ) : (
                          <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-monospace">0</span>
                        )}
                        {stat.suffix && (
                          <motion.span
                            initial={{ opacity: 0, x: 10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.15 + 0.3 }}
                            className="text-3xl sm:text-4xl font-bold text-white font-monospace"
                          >
                            {stat.suffix}
                          </motion.span>
                        )}
                      </div>
                    </div>

                    {/* Animated progress bar */}
                    <motion.div
                      className="w-full h-1 bg-border rounded-full mb-4 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full"
                        initial={{ width: "0%" }}
                        animate={inView ? { width: "100%" } : {}}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.15 + 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </motion.div>

                    {/* Label with shiny text effect */}
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-white font-monospace uppercase tracking-wide">
                      <ShinyText text={stat.label} />
                    </h3>
                    
                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.7 }}
                      className="text-xs sm:text-sm text-text-secondary leading-relaxed px-2"
                    >
                      {stat.description}
                    </motion.p>

                    {/* Status indicator */}
                    <motion.div
                      className="mt-4 flex items-center gap-2 text-xs text-green-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.8 }}
                    >
                      <Activity className="w-3 h-3 animate-pulse" />
                      <span className="font-monospace">LIVE</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;

