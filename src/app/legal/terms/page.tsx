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

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "1. ACCEPTANCE OF TERMS",
      content: "By accessing or using the SurakshaSetu platform, you agree to these Terms of Service. If you disagree with any part of these terms, you may not access the service. These terms apply to all users, including visitors, registered users, enterprise clients, and API consumers."
    },
    {
      title: "2. SERVICE DESCRIPTION",
      content: "SurakshaSetu provides AI-powered fraud detection and cybersecurity services including: Email fraud detection (phishing, spam, malware), SMS and call fraud analysis, Financial fraud monitoring (payment, banking, crypto), Real-time multi-channel alerts (mobile, WhatsApp, web, email), Blockchain-based forensic evidence collection, CERT-In integration for cybercrime reporting, ML-powered threat intelligence with 95%+ accuracy, Sub-100ms AI inference latency."
    },
    {
      title: "3. USER ACCOUNTS",
      content: "Account Registration: You must provide accurate, complete information. You are responsible for maintaining account security. Notify us immediately of unauthorized access. Account Types: Personal (individual users), Professional (small businesses), Enterprise (large organizations with custom SLAs). Account Responsibilities: Do not share login credentials. Use strong passwords and enable MFA. Comply with all applicable laws. Do not use the service for illegal activities."
    },
    {
      title: "4. SUBSCRIPTION AND PAYMENT",
      content: "Pricing: Subscription fees are based on selected plan tier. Prices are subject to change with 30-day notice. All fees are in INR unless otherwise specified. Payment Terms: Subscriptions renew automatically unless cancelled. Payments are non-refundable except as required by law. Failed payments may result in service suspension. Enterprise clients receive custom invoicing terms. Refunds: No refunds for partial subscription periods. 7-day money-back guarantee for new users. Refunds processed within 14 business days."
    },
    {
      title: "5. ACCEPTABLE USE POLICY",
      content: "You agree NOT to: Reverse engineer or decompile ML models or APIs. Attempt unauthorized access to platform infrastructure. Use the service to develop competing fraud detection systems. Submit false fraud reports or abuse detection systems. Exceed API rate limits or engage in automated scraping. Violate third-party intellectual property rights. Transmit malware, viruses, or harmful code. Harass, threaten, or impersonate other users."
    },
    {
      title: "6. API USAGE AND RATE LIMITS",
      content: "API Access: RESTful APIs with OAuth 2.0 authentication. WebSocket connections for real-time alerts. WhatsApp Business API integration. Blockchain forensics API endpoints. Rate Limits (per subscription tier): Personal: 1,000 requests/day. Professional: 10,000 requests/day. Enterprise: Custom limits per SLA. Exceeding limits may result in throttling or temporary suspension."
    },
    {
      title: "7. FRAUD DETECTION ACCURACY",
      content: "We strive for 95%+ fraud detection accuracy but DO NOT GUARANTEE: 100% detection of all fraud attempts. Zero false positives or false negatives. Real-time detection in all scenarios. Accuracy for novel or zero-day fraud patterns. You acknowledge that ML models have inherent limitations and should be used as one component of a comprehensive security strategy."
    },
    {
      title: "8. DATA SUBMISSION AND OWNERSHIP",
      content: "Your Data: You retain ownership of data submitted for analysis. You grant us license to process data for fraud detection. You warrant you have rights to submit the data. Our Data: ML models, algorithms, and threat intelligence are our proprietary assets. Detection results and threat scores are licensed to you. Forensic evidence packages are co-owned (you + SurakshaSetu)."
    },
    {
      title: "9. BLOCKCHAIN FORENSICS",
      content: "Immutable Logging: All fraud incidents are logged to blockchain. Forensic packages include: Threat timeline and evidence chain. Network traffic logs and behavioral patterns. ML model confidence scores and predictions. Court-admissible evidence for legal proceedings. CERT-In Integration: Automated reporting to cybercrime authorities. Compliance with IT Act 2000 Section 70B. Mandatory disclosure of cyber security incidents."
    },
    {
      title: "10. SERVICE AVAILABILITY",
      content: "SLA Commitments: 99.9% uptime guarantee for API endpoints. Sub-100ms AI inference latency. <200ms alert delivery across all channels. 24/7 threat monitoring and detection. Maintenance: Scheduled maintenance with 48-hour notice. Emergency maintenance as needed for security. No credit for scheduled downtime. Service credits for SLA violations (Enterprise plans)."
    },
    {
      title: "11. LIMITATION OF LIABILITY",
      content: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, SURAKSHASETU SHALL NOT BE LIABLE FOR: Indirect, incidental, special, or consequential damages. Loss of profits, revenue, data, or business opportunities. Financial losses from missed fraud detection. Damages exceeding subscription fees paid in preceding 12 months. Third-party actions or integrations. Force majeure events beyond our control."
    },
    {
      title: "12. INDEMNIFICATION",
      content: "You agree to indemnify SurakshaSetu from claims arising from: Your use or misuse of the service. Violation of these Terms of Service. Infringement of third-party rights. Breach of data submission warranties. Fraudulent or illegal activities using our platform."
    },
    {
      title: "13. INTELLECTUAL PROPERTY",
      content: "All platform components are protected by intellectual property laws: Trademarks: 'SurakshaSetu' and associated logos. Copyrights: Software code, documentation, UI/UX design. Patents: ML algorithms and threat detection methods. Trade Secrets: Proprietary threat intelligence databases."
    },
    {
      title: "14. TERMINATION",
      content: "We may terminate or suspend your account for: Violation of Terms of Service. Non-payment of subscription fees. Abusive or fraudulent behavior. Legal or regulatory requirements. Upon termination: All access to platform ceases immediately. Data deletion according to retention policy. No refunds for remaining subscription period. Forensic evidence packages remain accessible for 30 days."
    },
    {
      title: "15. DISPUTE RESOLUTION",
      content: "Governing Law: These terms are governed by laws of India. Jurisdiction: Courts in Bangalore, Karnataka, India. Arbitration: Disputes shall first be resolved through good-faith negotiation. If unresolved, binding arbitration under Indian Arbitration Act. Class Action Waiver: You agree to resolve disputes individually, not as class actions."
    },
    {
      title: "16. MODIFICATIONS TO TERMS",
      content: "We reserve the right to modify these terms: 30-day advance notice for material changes. Notification via email and in-app alerts. Continued use after changes constitutes acceptance. Right to terminate if you disagree with modifications."
    },
    {
      title: "17. THIRD-PARTY SERVICES",
      content: "Our platform integrates with: Cloud providers (AWS, GCP, Azure). Payment processors (Stripe, Razorpay). WhatsApp Business API. CERT-In and cybercrime portals. We are not responsible for third-party service availability, security, or terms."
    },
    {
      title: "18. EXPORT COMPLIANCE",
      content: "You agree to comply with: Indian IT Act 2000 and amendments. CERT-In mandatory reporting guidelines. International cybersecurity standards. Export control laws and regulations. You may not use the service in prohibited jurisdictions."
    },
    {
      title: "19. ENTIRE AGREEMENT",
      content: "These Terms constitute the entire agreement between you and SurakshaSetu regarding the service. Supersedes all prior agreements and understandings. Any conflicting terms in other documents are void. Enterprise clients may have supplemental agreements."
    },
    {
      title: "20. CONTACT INFORMATION",
      content: "For questions about these Terms: Legal Department: legal@surakshasetu.com. Phone: +91-80-XXXX-XXXX. Address: SurakshaSetu Cybersecurity Pvt. Ltd., Bangalore, Karnataka, India"
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
              / legal / terms of service
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h1 mb-6"
            >
              TERMS OF SERVICE
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

      {/* Terms Content */}
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
              <h2 className="h3 mb-4">AGREEMENT TO TERMS</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of the SurakshaSetu AI-powered fraud detection and cybersecurity platform, including all services, APIs, mobile applications, web dashboards, WhatsApp bot integration, blockchain forensics, and CERT-In reporting features.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                By creating an account or using any part of our service, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
            </motion.div>

            {/* Terms Sections */}
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

            {/* Acknowledgment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-12 mt-12"
            >
              <h2 className="h3 mb-4">ACCEPTANCE AND ACKNOWLEDGMENT</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                By using SurakshaSetu, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them. If you do not agree with these terms, please discontinue use of the service immediately.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                For questions or clarifications about these Terms, contact <span className="text-primary">legal@surakshasetu.com</span>
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

