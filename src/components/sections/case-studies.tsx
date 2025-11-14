"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, TrendingUp, Users, Award } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Financial Institution Fraud Prevention",
    company: "Major Indian Bank",
    challenge: "Prevented ₹50M+ in payment fraud",
    solution: "Real-time transaction monitoring with GNN analysis",
    results: [
      { metric: "95.2%", label: "Fraud Detection Accuracy" },
      { metric: "87ms", label: "Average Detection Latency" },
      { metric: "₹50M+", label: "Fraud Prevented" },
    ],
    icon: Shield,
    color: "from-red-500/20 to-red-600/10",
    borderColor: "border-red-500/30",
  },
  {
    title: "Enterprise Email Security",
    company: "Fortune 500 Tech Company",
    challenge: "Protected 10,000+ employees from phishing",
    solution: "AI-powered email analysis with SPF/DKIM validation",
    results: [
      { metric: "99.5%", label: "Spam Filtering Accuracy" },
      { metric: "2,340", label: "Phishing Attempts Blocked" },
      { metric: "0", label: "Successful Breaches" },
    ],
    icon: TrendingUp,
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
  },
  {
    title: "SMS/Call Fraud Detection",
    company: "Telecom Service Provider",
    challenge: "Detect scam calls and fraudulent SMS",
    solution: "Multi-language NLP with behavioral analysis",
    results: [
      { metric: "1.2M+", label: "Fraudulent Calls Detected" },
      { metric: "94%", label: "Detection Accuracy" },
      { metric: "150ms", label: "Real-Time Alert Delivery" },
    ],
    icon: Users,
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-500/30",
  },
];

const CaseStudies = () => {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.05),transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="sub-title mb-4">/ case studies</p>
          <h2 className="h2 mb-6">PROVEN RESULTS IN REAL-WORLD DEPLOYMENTS</h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            See how SurakshaSetu has protected organizations from fraud and cyber threats with measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            const Icon = study.icon;

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className={`relative bg-gradient-to-br ${study.color} border ${study.borderColor} rounded-2xl p-8 hover:border-opacity-60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] h-full flex flex-col`}>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />

                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${study.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="h4 text-white mb-1">{study.title}</h3>
                      <p className="text-sm text-primary font-monospace">{study.company}</p>
                    </div>
                  </div>

                  <div className="mb-6 flex-grow">
                    <p className="text-sm text-text-secondary mb-4">
                      <span className="text-primary font-semibold">Challenge:</span> {study.challenge}
                    </p>
                    <p className="text-sm text-text-secondary">
                      <span className="text-primary font-semibold">Solution:</span> {study.solution}
                    </p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-border">
                    {study.results.map((result, resultIndex) => (
                      <motion.div
                        key={resultIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + resultIndex * 0.1 }}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm text-text-secondary">{result.label}</span>
                        <span className="text-lg font-bold text-white font-monospace">{result.metric}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="btn-text inline-block border border-white/20 px-8 py-4 text-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
          >
            VIEW ALL CASE STUDIES
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;

