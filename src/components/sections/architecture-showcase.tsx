"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedText, AnimatedTextLine } from "@/components/ui/animated-text";
import { 
  Smartphone, 
  Globe, 
  MessageSquare, 
  Brain, 
  Shield, 
  Database,
  Zap,
  FileSearch,
  Lock,
  Network
} from "lucide-react";

const architectureComponents = [
  {
    name: "Mobile App",
    icon: Smartphone,
    tech: "Flutter",
    description: "Cross-platform real-time alerts via WebSocket with offline support and push notifications",
    features: ["WebSocket", "Push Notifications", "Offline Mode"],
    position: "top-left",
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
  },
  {
    name: "Web Dashboard",
    icon: Globe,
    tech: "React/Next.js",
    description: "Comprehensive admin panel with real-time analytics, threat visualization, and reporting",
    features: ["Real-time Analytics", "Threat Dashboard", "Reports"],
    position: "top-right",
    color: "from-cyan-500/20 to-cyan-600/10",
    borderColor: "border-cyan-500/30",
  },
  {
    name: "WhatsApp Bot",
    icon: MessageSquare,
    tech: "Node.js",
    description: "Multi-language TTS alerts with interactive commands and automated responses",
    features: ["Multi-language", "TTS", "Interactive"],
    position: "top-center",
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-500/30",
  },
  {
    name: "AI Services",
    icon: Brain,
    tech: "FastAPI/PyTorch",
    description: "Advanced ML models with NLP analysis, anomaly detection, and predictive threat intelligence",
    features: ["ML Models", "NLP", "Anomaly Detection"],
    position: "center",
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-500/30",
  },
  {
    name: "Security System",
    icon: Shield,
    tech: "4-Layer Honeypot",
    description: "Multi-layered defense with threat intelligence, SOAR automation, and zero-trust architecture",
    features: ["Honeypot", "SOAR", "Zero-Trust"],
    position: "bottom-left",
    color: "from-red-500/20 to-red-600/10",
    borderColor: "border-red-500/30",
  },
  {
    name: "Blockchain Forensics",
    icon: FileSearch,
    tech: "Immutable Logging",
    description: "Tamper-proof evidence collection with blockchain verification and legal compliance",
    features: ["Immutable", "Verified", "Compliant"],
    position: "bottom-right",
    color: "from-yellow-500/20 to-yellow-600/10",
    borderColor: "border-yellow-500/30",
  },
];

const ArchitectureShowcase = () => {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="sub-title mb-4">/ system architecture</p>
          <h2 className="h2 mb-6">ENTERPRISE-GRADE ARCHITECTURE</h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Scalable microservices architecture designed for high performance and reliability
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central AI Services */}
          <div className="relative min-h-[600px] flex items-center justify-center">
            {/* Connection lines (visual) */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 800 600">
                {/* Lines connecting components */}
                <motion.line
                  x1="400"
                  y1="300"
                  x2="200"
                  y2="150"
                  stroke="rgba(255,0,0,0.3)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.line
                  x1="400"
                  y1="300"
                  x2="600"
                  y2="150"
                  stroke="rgba(255,0,0,0.3)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.line
                  x1="400"
                  y1="300"
                  x2="400"
                  y2="100"
                  stroke="rgba(255,0,0,0.3)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.line
                  x1="400"
                  y1="300"
                  x2="200"
                  y2="450"
                  stroke="rgba(255,0,0,0.3)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.line
                  x1="400"
                  y1="300"
                  x2="600"
                  y2="450"
                  stroke="rgba(255,0,0,0.3)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                />
              </svg>
            </div>

            {/* Components */}
            {architectureComponents.map((component, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.3,
              });

              const Icon = component.icon;
              const positions: Record<string, string> = {
                "top-left": "top-0 left-0",
                "top-right": "top-0 right-0",
                "top-center": "top-0 left-1/2 -translate-x-1/2",
                "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "bottom-left": "bottom-0 left-0",
                "bottom-right": "bottom-0 right-0",
              };

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`absolute ${positions[component.position]} w-64 md:w-72`}
                >
                  <div className={`group relative bg-gradient-to-br ${component.color} border-2 ${component.borderColor} rounded-2xl p-6 hover:border-opacity-80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]`}>
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${component.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10 rounded-2xl`} />
                    
                    {/* Corner decorations */}
                    <div className={`absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 ${component.borderColor} opacity-40 group-hover:opacity-100 transition-opacity`} />
                    <div className={`absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 ${component.borderColor} opacity-40 group-hover:opacity-100 transition-opacity`} />
                    
                    <div className="flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${component.color} border ${component.borderColor} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Name with animated text */}
                      <h3 className="text-xl font-bold text-white mb-2 font-monospace uppercase">
                        <AnimatedText text={component.name} delay={index * 0.15 + 0.2} />
                      </h3>
                      
                      {/* Tech stack */}
                      <p className="text-xs text-primary mb-3 font-monospace uppercase tracking-wider">
                        {component.tech}
                      </p>
                      
                      {/* Description */}
                      <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                        {component.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {component.features.map((feature, featureIndex) => (
                          <motion.span
                            key={featureIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.15 + 0.4 + featureIndex * 0.1 }}
                            className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-text-secondary font-monospace uppercase tracking-wide hover:bg-white/10 hover:border-white/20 transition-all"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureShowcase;

