"use client";

import { Mail, MessageSquare, DollarSign, Shield, FileSearch, Brain, Smartphone, Globe } from "lucide-react";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DecorativeParticles: FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 text-[rgba(255,255,255,0.2)]"
      aria-hidden="true"
    >
      <path d="M40 1H1V40" stroke="currentColor" />
    </svg>
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 right-0 text-[rgba(255,255,255,0.2)]"
      aria-hidden="true"
    >
      <path d="M0 1H39V40" stroke="currentColor" />
    </svg>
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 text-[rgba(255,255,255,0.2)]"
      aria-hidden="true"
    >
      <path d="M40 39.5H1V0.5" stroke="currentColor" />
    </svg>
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 right-0 text-[rgba(255,255,255,0.2)]"
      aria-hidden="true"
    >
      <path d="M0 39.5H39V0.5" stroke="currentColor" />
    </svg>
  </div>
);

const CardDecorativeParticles: FC = () => (
  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <svg
      className="absolute top-0 left-0 w-[40px] h-[40px] text-[rgba(255,255,255,0.2)]"
      aria-hidden="true"
    >
      <path d="M40 1H1V40" stroke="currentColor" />
    </svg>
    <svg
      className="absolute top-0 right-0 w-[40px] h-[40px] text-[rgba(255,255,255,0.2)]"
      aria-hidden="true"
    >
      <path d="M0 1H39V40" stroke="currentColor" />
    </svg>
    <svg
      className="absolute bottom-0 left-0 w-[40px] h-[40px] text-[rgba(255,255,255,0.2)]"
      aria-hidden="true"
    >
      <path d="M40 39.5H1V0.5" stroke="currentColor" />
    </svg>
    <svg
      className="absolute bottom-0 right-0 w-[40px] h-[40px] text-[rgba(255,255,255,0.2)]"
      aria-hidden="true"
    >
      <path d="M0 39.5H39V0.5" stroke="currentColor" />
    </svg>
  </div>
);

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps & { index: number }> = ({ icon, title, description, index }) => {
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
    >
      <Link
        href="/contact"
        role="article"
        className="group relative flex flex-col items-center bg-gradient-to-br from-card via-card/90 to-card border border-border rounded-lg py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,0,0,0.25)] hover:border-primary/50"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/10 transition-all duration-500 blur-xl -z-10" />
        
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-[70px] h-[59px] flex items-center justify-center text-primary mb-6"
        >
          {icon}
        </motion.div>
        <div className="flex flex-col gap-2">
          <h3 className="h4 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
        </div>
        <CardDecorativeParticles />
      </Link>
    </motion.div>
  );
};

const serviceData = [
  {
    icon: <Mail size={48} />,
    title: "Email Fraud Detection",
    description: "Advanced AI-powered email security with SPF/DKIM/DMARC validation, phishing detection using NLP and deep learning models, spam filtering with 99.5% accuracy, and malware scanning. Real-time analysis with explainable AI showing threat indicators. Supports multi-language email analysis and behavioral pattern recognition.",
  },
  {
    icon: <MessageSquare size={48} />,
    title: "SMS/Call Fraud Detection",
    description: "Real-time SMS and call analysis using natural language processing and voice pattern recognition. Detects fraudulent communications, scam calls, and phishing messages. Multi-language support (Hindi, English, regional languages) with TTS integration. Behavioral analysis identifies suspicious patterns and social engineering attempts.",
  },
  {
    icon: <DollarSign size={48} />,
    title: "Financial Fraud Detection",
    description: "Comprehensive financial protection covering payment fraud (credit card, UPI, digital wallets), banking scams (account takeover, fake banking apps), investment fraud (Ponzi schemes, fake trading platforms), and cryptocurrency fraud (wallet scams, fake exchanges). Real-time transaction monitoring with risk scoring and anomaly detection using graph neural networks.",
    isFeatured: true,
  },
  {
    icon: <Shield size={48} />,
    title: "Multi-Layer Honeypot Defense",
    description: "4-layer security architecture: Layer 1 (Basic Honeypot with fake admin APIs), Layer 2 (Enhanced Honeypot with realistic responses), Layer 3 (IDS/IPS integration with attacker fingerprinting), Layer 4 (Master Orchestrator for forensic package generation, attacker isolation, threat intelligence correlation, and CERT-In automated reporting). Quantum-resistant cryptography and zero-trust architecture.",
  },
  {
    icon: <FileSearch size={48} />,
    title: "Digital Forensics",
    description: "Automated blockchain-based immutable evidence collection with cryptographic hashing. Generates tamper-proof forensic packages including screenshots, network logs, timestamps, and threat intelligence data. Supports legal proceedings with court-admissible evidence. Integrates with CERT-In for automated cybercrime reporting. Maintains complete audit trails with blockchain verification.",
  },
  {
    icon: <Brain size={48} />,
    title: "AI-Powered Threat Intelligence",
    description: "Advanced ML models including ensemble methods (XGBoost, LightGBM, CatBoost), deep learning (LSTM, Transformer networks), and Graph Neural Networks for relationship analysis. Explainable AI with SHAP and LIME for transparency. Federated learning for privacy-preserving model updates. Continuous behavioral analysis and concept drift detection. Real-time threat intelligence feed integration.",
  },
];

const ServicesSection = () => {
  return (
    <section
      role="region"
      aria-label="Cyber Defense Services"
      className="bg-black py-24 lg:py-[120px] bg-[radial-gradient(circle,rgba(255,0,0,0.15),transparent_60%)]"
    >
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <div className="relative border border-border p-8 md:p-12 lg:p-16 flex flex-col items-center gap-16">
          <DecorativeParticles />
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
            <p className="sub-title">/ our services</p>
            <h2 role="heading" className="h2 tracking-[-0.01em]">
              Comprehensive Fraud Detection & Cybersecurity Services
            </h2>
            <p className="text-text-secondary max-w-2xl">
              Enterprise-grade AI-powered platform protecting users from email fraud, SMS/call scams, financial fraud, and cyber threats. Real-time detection with instant multi-channel alerts. Advanced ML models (ensemble, deep learning, GNN), explainable AI, blockchain forensics, and 4-layer honeypot defense. 95%+ accuracy with sub-100ms latency.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.map((service, index) =>
              service.isFeatured ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="md:col-span-2 lg:col-span-3 flex justify-center"
                >
                  <div className="w-full md:w-2/3 lg:w-1/2">
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      index={index}
                    />
                  </div>
                </motion.div>
              ) : (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;