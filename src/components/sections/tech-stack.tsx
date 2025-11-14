"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedText } from "@/components/ui/animated-text";
import { 
  Brain, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Shield, 
  Zap,
  Lock,
  Network,
  Cpu
} from "lucide-react";

const techStack = [
  {
    category: "AI/ML",
    icon: Brain,
    technologies: ["PyTorch", "TensorFlow", "XGBoost", "LightGBM", "CatBoost", "Transformers", "GNN"],
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-500/30",
  },
  {
    category: "Backend",
    icon: Code,
    technologies: ["Node.js", "Express.js", "FastAPI", "WebSocket", "Redis", "PostgreSQL"],
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
  },
  {
    category: "Frontend",
    icon: Globe,
    technologies: ["React", "Next.js", "Flutter", "TypeScript", "Tailwind CSS"],
    color: "from-cyan-500/20 to-cyan-600/10",
    borderColor: "border-cyan-500/30",
  },
  {
    category: "Security",
    icon: Shield,
    technologies: ["Blockchain", "Quantum-Resistant Crypto", "Zero-Trust", "Honeypots", "SOAR"],
    color: "from-red-500/20 to-red-600/10",
    borderColor: "border-red-500/30",
  },
  {
    category: "Infrastructure",
    icon: Network,
    technologies: ["Docker", "Kubernetes", "Nginx", "Prometheus", "Grafana"],
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-500/30",
  },
  {
    category: "Integration",
    icon: Zap,
    technologies: ["WhatsApp API", "CERT-In", "SIEM", "SOAR", "REST APIs"],
    color: "from-yellow-500/20 to-yellow-600/10",
    borderColor: "border-yellow-500/30",
  },
];

const TechStack = () => {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,100,255,0.1),transparent_50%)]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="sub-title mb-4">/ technology stack</p>
          <h2 className="h2 mb-6">POWERED BY CUTTING-EDGE TECHNOLOGY</h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Built with industry-leading technologies for maximum performance, security, and scalability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {techStack.map((tech, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            const Icon = tech.icon;

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative bg-gradient-to-br ${tech.color} border-2 ${tech.borderColor} rounded-2xl p-8 hover:border-opacity-80 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]`}>
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10`} />

                  {/* Corner decorations */}
                  <div className={`absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 ${tech.borderColor} opacity-40 group-hover:opacity-100 transition-opacity`} />
                  <div className={`absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 ${tech.borderColor} opacity-40 group-hover:opacity-100 transition-opacity`} />

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} border-2 ${tech.borderColor} flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="pt-2">
                      <h3 className="text-2xl font-bold text-white font-monospace uppercase">
                        <AnimatedText text={tech.category} delay={index * 0.1 + 0.2} staggerDelay={0.05} />
                      </h3>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: '100%' } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                        className={`h-0.5 bg-gradient-to-r ${tech.color} mt-2`}
                      />
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {tech.technologies.map((techName, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.1 + 0.5 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-text-secondary font-monospace hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-default shadow-lg"
                      >
                        {techName}
                      </motion.span>
                    ))}
                  </div>

                  {/* Animated pulse effect */}
                  <motion.div
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r ${tech.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

