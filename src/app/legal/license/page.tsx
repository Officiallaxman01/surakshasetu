"use client";

import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import FinalCta from "@/components/sections/final-cta";
import { PlasmaBackground } from "@/components/ui/plasma-background";

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
  </>
);

export default function LicensePage() {
  const sections = [
    {
      title: "1. SOFTWARE LICENSE GRANT",
      content: "SurakshaSetu grants you a limited, non-exclusive, non-transferable, revocable license to use the SurakshaSetu fraud detection and cybersecurity platform software (the 'Software') in accordance with the terms of this License Agreement."
    },
    {
      title: "2. PERMITTED USES",
      content: "You may use the Software for: (a) Personal or commercial fraud detection and cybersecurity protection; (b) Integration with your mobile applications, web platforms, or WhatsApp bot; (c) Real-time threat monitoring and alert systems; (d) Blockchain forensic evidence collection and CERT-In reporting."
    },
    {
      title: "3. LICENSE RESTRICTIONS",
      content: "You may NOT: (a) Reverse engineer, decompile, or disassemble the Software or ML models; (b) Redistribute, sublicense, rent, lease, or lend the Software; (c) Remove or modify any proprietary notices, labels, or marks; (d) Use the Software to develop competing fraud detection systems; (e) Exceed the usage limits defined in your subscription tier."
    },
    {
      title: "4. INTELLECTUAL PROPERTY RIGHTS",
      content: "SurakshaSetu retains all rights, title, and interest in the Software, including all AI/ML models, algorithms, threat intelligence databases, and proprietary technology. Your license does not grant you any ownership rights to the Software or its underlying technology."
    },
    {
      title: "5. API AND INTEGRATION LICENSE",
      content: "The license includes access to: (a) REST APIs for platform integration; (b) WebSocket real-time communication channels; (c) WhatsApp bot integration APIs; (d) Blockchain forensic logging APIs; (e) CERT-In reporting integration. API usage is subject to rate limits and quotas defined in your subscription plan."
    },
    {
      title: "6. ML MODEL AND DATA USAGE",
      content: "The Software includes proprietary ML models (XGBoost, LightGBM, CatBoost, LSTM, Transformers, GNN) trained on threat intelligence data. You may not: (a) Extract or export ML model weights; (b) Train derivative models using our inference outputs; (c) Reverse engineer model architectures; (d) Use model predictions to build competing services."
    },
    {
      title: "7. DATA COLLECTION AND USAGE",
      content: "By using the Software, you consent to: (a) Collection of fraud detection telemetry data; (b) Anonymized threat pattern analysis; (c) ML model performance monitoring; (d) Aggregated threat intelligence sharing with CERT-In. Your submitted data (emails, SMS, call logs) is processed according to our Privacy Policy."
    },
    {
      title: "8. SUBSCRIPTION AND PAYMENT",
      content: "Access to the Software requires an active subscription. Subscription tiers include: (a) Personal Plan: Individual users, limited API calls; (b) Professional Plan: Small businesses, higher rate limits; (c) Enterprise Plan: Large organizations, custom integrations, dedicated support. Payment terms are defined in your subscription agreement."
    },
    {
      title: "9. SERVICE LEVEL AGREEMENT (SLA)",
      content: "SurakshaSetu commits to: (a) 99.9% uptime guarantee for API endpoints; (b) Sub-100ms AI inference latency for fraud detection; (c) <200ms total alert delivery time via all channels; (d) 24/7 threat monitoring and detection. SLA credits apply for verified downtime exceeding guaranteed uptime."
    },
    {
      title: "10. WARRANTY DISCLAIMER",
      content: "THE SOFTWARE IS PROVIDED 'AS IS' WITHOUT WARRANTY OF ANY KIND. SURAKSHASETU DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant that the Software will be error-free or that fraud detection will be 100% accurate."
    },
    {
      title: "11. LIMITATION OF LIABILITY",
      content: "IN NO EVENT SHALL SURAKSHASETU BE LIABLE FOR: (a) Indirect, incidental, special, consequential, or punitive damages; (b) Loss of profits, revenue, data, or business opportunities; (c) Financial losses resulting from missed fraud detection; (d) Damages exceeding the amount paid for the Software in the preceding 12 months."
    },
    {
      title: "12. INDEMNIFICATION",
      content: "You agree to indemnify and hold SurakshaSetu harmless from any claims, damages, losses, or expenses (including legal fees) arising from: (a) Your use or misuse of the Software; (b) Violation of this License Agreement; (c) Infringement of third-party rights; (d) Unauthorized access to or use of the Software."
    },
    {
      title: "13. TERMINATION",
      content: "This license terminates automatically if you breach any terms. Upon termination: (a) You must cease all use of the Software; (b) Delete all copies of the Software and related materials; (c) Destroy all forensic evidence packages stored locally; (d) Forfeit any remaining subscription credits. Termination does not entitle you to a refund."
    },
    {
      title: "14. EXPORT COMPLIANCE",
      content: "The Software may be subject to export control laws and regulations. You agree to comply with all applicable laws, including Indian IT Act 2000, CERT-In guidelines, and international cybersecurity standards. You may not export or re-export the Software to prohibited countries or entities."
    },
    {
      title: "15. GOVERNING LAW AND JURISDICTION",
      content: "This License Agreement is governed by the laws of India. Any disputes shall be resolved in courts located in Bangalore, Karnataka, India. Both parties consent to the exclusive jurisdiction of these courts."
    },
    {
      title: "16. UPDATES AND MODIFICATIONS",
      content: "SurakshaSetu reserves the right to: (a) Update or modify the Software at any time; (b) Add or remove features without prior notice; (c) Update ML models and threat intelligence databases; (d) Modify this License Agreement with 30 days' notice. Continued use after modifications constitutes acceptance."
    },
    {
      title: "17. OPEN SOURCE COMPONENTS",
      content: "The Software may include open source components licensed under separate terms (MIT, Apache 2.0, BSD). These components retain their original licenses. A complete list of open source dependencies is available in the Software documentation."
    },
    {
      title: "18. CONTACT INFORMATION",
      content: "For licensing questions or support: Email: legal@surakshasetu.com | Phone: +91-80-XXXX-XXXX | Address: SurakshaSetu Cybersecurity Pvt. Ltd., Bangalore, Karnataka, India"
    }
  ];

  return (
    <main className="min-h-screen bg-black relative">
      {/* Plasma Background */}
      <div className="fixed inset-0 z-0">
        <PlasmaBackground color="#FF0000" opacity={0.10} speed={0.0006} />
      </div>
      <div className="relative z-10">
        <Header />
      
      {/* Hero Section */}
      <section className="relative bg-black pt-[120px] md:pt-[140px] lg:pt-[160px] pb-16 md:pb-20">
        <DecorativeCorners />
        
        <div className="container relative z-10">
          <div className="text-center max-w-[900px] mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sub-title mb-4"
            >
              / legal / license
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h1 mb-6"
            >
              SOFTWARE LICENSE AGREEMENT
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-base md:text-lg leading-relaxed"
            >
              Last Updated: November 14, 2025 | Effective Date: January 1, 2025
            </motion.p>
          </div>
        </div>
      </section>

      {/* License Content */}
      <section className="relative bg-black py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-8"
            >
              <h2 className="h3 mb-4">IMPORTANT NOTICE</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                BY DOWNLOADING, INSTALLING, OR USING THE SURAKSHASETU SOFTWARE, YOU AGREE TO BE BOUND BY THE TERMS OF THIS LICENSE AGREEMENT. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE SOFTWARE.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                This License Agreement governs your use of the SurakshaSetu AI-powered fraud detection and cybersecurity platform, including all ML models, APIs, mobile applications, web dashboards, WhatsApp bot integration, blockchain forensics, and CERT-In reporting features.
              </p>
            </motion.div>

            {/* License Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card border border-border rounded-xl p-6 lg:p-8 hover:border-primary/30 transition-colors"
                >
                  <h3 className="h5 mb-3 text-white">{section.title}</h3>
                  <p className="text-text-secondary text-base leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Acceptance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-12 mt-12"
            >
              <h2 className="h3 mb-4">ACKNOWLEDGMENT AND ACCEPTANCE</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                By using the SurakshaSetu Software, you acknowledge that you have read, understood, and agree to be bound by this License Agreement. This agreement constitutes the entire agreement between you and SurakshaSetu regarding the Software.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                For questions about this License Agreement, please contact our legal team at <span className="text-primary">legal@surakshasetu.com</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

        <FinalCta />
        <Footer />
      </div>
    </main>
  );
}

