"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What types of fraud does SurakshaSetu detect?",
    answer:
      "SurakshaSetu detects email fraud (phishing, spam, malware), SMS/call fraud, financial fraud (payment, banking, investment, cryptocurrency), and cyber threats through our multi-layer security architecture.",
    value: "item-1",
  },
  {
    question: "How fast are fraud detection alerts delivered?",
    answer:
      "Our AI-powered detection engine provides sub-100ms inference latency. Alerts are delivered in real-time via mobile app (WebSocket), WhatsApp bot, web dashboard, and email within 200ms of detection.",
    value: "item-2",
  },
  {
    question: "What is the accuracy of your fraud detection?",
    answer:
      "SurakshaSetu achieves 95%+ fraud detection accuracy using advanced ML models including ensemble methods, deep learning, and behavioral analysis. Our explainable AI (SHAP/LIME) provides transparency in decision-making.",
    value: "item-3",
  },
  {
    question: "How does the blockchain forensics feature work?",
    answer:
      "All detected fraud incidents are automatically logged to an immutable blockchain. This creates tamper-proof forensic packages that can be used as legal evidence. We also integrate with CERT-In for automated reporting to cybercrime authorities.",
    value: "item-4",
  },
  {
    question: "What channels can I receive alerts on?",
    answer:
      "SurakshaSetu supports multi-channel alert delivery: mobile app (Flutter) with real-time WebSocket updates, WhatsApp bot with multi-language support, web dashboard (React), and email notifications. All channels receive alerts simultaneously.",
    value: "item-5",
  },
  {
    question: "What is the 4-layer honeypot defense system?",
    answer:
      "Our multi-layer security architecture includes Layer 1 (Basic Honeypot), Layer 2 (Enhanced Honeypot), Layer 3 (IDS/IPS Integration), and Layer 4 (Master Orchestrator) that handles forensic package generation, attacker isolation, threat intelligence, and CERT-In reporting.",
    value: "item-6",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "SurakshaSetu is accessible via mobile app (iOS/Android), web dashboard, and WhatsApp bot. No complex installation required. Simply download the mobile app or access the web dashboard to get started.",
    value: "item-7",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Yes. SurakshaSetu uses end-to-end encryption (TLS 1.3), quantum-resistant cryptography, and zero-trust architecture. All data is encrypted in transit and at rest using AES-256 encryption. We comply with GDPR, ISO 27001, SOC 2, and other international security standards. User data is never sold or shared with third parties.",
    value: "item-8",
  },
  {
    question: "What ML models does SurakshaSetu use?",
    answer:
      "SurakshaSetu employs a hybrid approach: ensemble models (XGBoost, LightGBM, CatBoost) for structured fraud detection, deep learning (LSTM, Transformer networks) for NLP and pattern recognition, Graph Neural Networks (GNN) for relationship analysis in financial fraud, and behavioral analysis models for anomaly detection. All models are continuously updated using federated learning.",
    value: "item-9",
  },
  {
    question: "How does the explainable AI feature work?",
    answer:
      "Our explainable AI uses SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) to provide transparent explanations for fraud detection decisions. Users can see which features triggered an alert, confidence scores, and threat indicators. This builds trust and helps security teams understand AI decisions.",
    value: "item-10",
  },
  {
    question: "Can SurakshaSetu integrate with existing security systems?",
    answer:
      "Yes. SurakshaSetu offers RESTful APIs and WebSocket connections for integration with existing security infrastructure. We support SOAR (Security Orchestration, Automation, and Response) integration, SIEM systems, and threat intelligence platforms. Enterprise plans include custom integration support.",
    value: "item-11",
  },
];

const DecorativeBracket = ({ className }: { className?: string }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M40 1H1V40" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const FaqSection = () => {
  return (
    <section
      id="faq"
      className="relative bg-black py-[120px] lg:py-20 md:py-15"
    >
      <div className="absolute top-0 left-0 w-10 h-10 text-[rgba(255,255,255,0.2)]">
        <DecorativeBracket />
      </div>
      <div className="absolute top-0 right-0 w-10 h-10 text-[rgba(255,255,255,0.2)] transform -scale-x-100">
        <DecorativeBracket />
      </div>
      <div className="absolute bottom-0 left-0 w-10 h-10 text-[rgba(255,255,255,0.2)] transform -scale-y-100">
        <DecorativeBracket />
      </div>
      <div className="absolute bottom-0 right-0 w-10 h-10 text-[rgba(255,255,255,0.2)] transform -scale-x-100 -scale-y-100">
        <DecorativeBracket />
      </div>

      <div className="container">
        <div className="relative flex flex-col items-center">
          <p className="sub-title">/ faq</p>
          <h2 className="h2 text-center mt-2 mb-6">
            Got Questions? We’ve Got Answers.
          </h2>
          <p className="max-w-[800px] text-center text-text-secondary">
            Everything you need to know about SurakshaSetu's services, security
            approach, and how we work — all in one place.
          </p>
          <div className="w-full max-w-[900px] mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });

                return (
                  <motion.div
                    key={item.value}
                    ref={ref}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <AccordionItem
                      value={item.value}
                      className="border-b border-border hover:border-primary/30 transition-colors"
                    >
                  <AccordionTrigger className="group flex w-full items-center justify-between py-6 text-left hover:no-underline">
                    <h5 className="h5 text-text-primary flex-1 pr-4">
                      {item.question}
                    </h5>
                    <div className="relative h-4 w-4 shrink-0 text-white">
                      <div className="absolute inset-0 flex items-center">
                        <div className="h-px w-full bg-current" />
                      </div>
                      <div className="absolute inset-0 flex justify-center">
                        <div className="h-full w-px bg-current transition-transform duration-300 ease-in-out group-data-[state=open]:scale-y-0" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pb-6">
                      <p className="text-text-secondary">{item.answer}</p>
                    </div>
                  </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;