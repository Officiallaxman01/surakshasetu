"use client";

import Link from "next/link";
import Header from "@/components/sections/header";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";

const DecorativeCorners = () => (
  <>
    <div className="absolute top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-16">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 1H1V40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        <path d="M15 1H1" stroke="#FF0000" strokeWidth="2" />
      </svg>
    </div>
    <div className="absolute top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-16">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H39V40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        <path d="M25 1H39" stroke="#FF0000" strokeWidth="2" />
      </svg>
    </div>
    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 39H1V0" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        <path d="M1 25V39" stroke="#FF0000" strokeWidth="2" />
      </svg>
    </div>
    <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 39H39V0" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        <path d="M39 25V39" stroke="#FF0000" strokeWidth="2" />
      </svg>
    </div>
  </>
);

const blogPosts = [
  {
    slug: "how-ai-detects-phishing-emails-in-real-time",
    date: "January 15, 2025",
    title: "How AI Detects Phishing Emails in Real-Time",
    description: "Deep dive into SurakshaSetu's NLP and deep learning models that analyze email content, headers, and behavioral patterns to detect phishing attempts with 95%+ accuracy in under 100ms.",
  },
  {
    slug: "blockchain-forensics-legal-evidence-cybercrime",
    date: "January 12, 2025",
    title: "Blockchain Forensics: Creating Legal Evidence for Cybercrime",
    description: "How SurakshaSetu's immutable blockchain logging creates tamper-proof forensic packages that have been successfully used in legal proceedings and CERT-In cybercrime investigations.",
  },
  {
    slug: "4-layer-honeypot-defense-architecture",
    date: "January 8, 2025",
    title: "Understanding Our 4-Layer Honeypot Defense Architecture",
    description: "Technical breakdown of our multi-layer security system: from basic honeypots to master orchestrator, and how each layer contributes to comprehensive threat detection and attacker isolation.",
  },
  {
    slug: "financial-fraud-detection-graph-neural-networks",
    date: "January 5, 2025",
    title: "Financial Fraud Detection Using Graph Neural Networks",
    description: "Explore how GNNs analyze transaction relationships, detect payment fraud patterns, and identify cryptocurrency scams by mapping complex financial networks and behavioral anomalies.",
  },
  {
    slug: "real-time-alerts-multi-channel-integration",
    date: "January 3, 2025",
    title: "Real-Time Alerts: Multi-Channel Integration Explained",
    description: "How SurakshaSetu delivers instant fraud alerts via mobile app (WebSocket), WhatsApp bot, web dashboard, and email simultaneously, ensuring users never miss critical security notifications.",
  },
  {
    slug: "explainable-ai-shap-lime-fraud-detection",
    date: "December 28, 2024",
    title: "Explainable AI: SHAP and LIME in Fraud Detection",
    description: "Understanding how explainable AI techniques provide transparency in fraud detection decisions, helping users and security teams understand why alerts are triggered and build trust in AI systems.",
  },
  {
    slug: "sms-call-fraud-detection-multilingual-support",
    date: "December 25, 2024",
    title: "SMS/Call Fraud Detection with Multilingual Support",
    description: "How SurakshaSetu's NLP models detect fraudulent SMS and calls in multiple languages (Hindi, English, regional languages) using advanced text-to-speech and natural language understanding.",
  },
  {
    slug: "federated-learning-privacy-preserving-ai",
    date: "December 20, 2024",
    title: "Federated Learning: Privacy-Preserving AI for Fraud Detection",
    description: "Learn how SurakshaSetu uses federated learning to improve fraud detection models while maintaining user privacy, allowing continuous model improvement without sharing sensitive data.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-black pt-[120px] md:pt-[140px] lg:pt-[160px] pb-16 md:pb-20 lg:pb-24">
        <DecorativeCorners />
        
        <div className="container relative z-10">
          <div className="flex justify-between items-end w-full">
            <div className="max-w-[900px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <p className="sub-title">/ Blog</p>
                  <p className="sub-title">/ insights</p>
                </div>
                <h1 className="h1 mb-6">Dig Into Cyber Insights That Matter</h1>
              </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="hidden xl:flex flex-col items-start gap-2 pb-4">
              <p className="font-monospace text-sm text-text-secondary uppercase tracking-wider">
                SCROLL DOWN
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="relative bg-black py-16 md:py-20 lg:py-[120px]">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={`/blog/${post.slug}`}
                  className="block group hover:text-primary transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 pb-8 border-b border-border last:border-0">
                    <div className="md:w-32 flex-shrink-0">
                      <p className="text-text-muted text-sm font-monospace uppercase">
                        {post.date}
                      </p>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-3 font-monospace uppercase group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-text-secondary text-base leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}
