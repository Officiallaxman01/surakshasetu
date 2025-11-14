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

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. INFORMATION WE COLLECT",
      content: `We collect the following types of information:

**Personal Information:**
- Name, email address, phone number
- Billing and payment information
- Company details (for business accounts)

**Fraud Detection Data:**
- Emails, SMS messages, call logs submitted for analysis
- Screenshots and attachments from suspicious communications
- Phone numbers, email addresses, URLs from reported threats
- Voice patterns and metadata from call analysis

**Usage Data:**
- API usage statistics and request logs
- Platform interaction data (mobile app, web dashboard, WhatsApp bot)
- Device information (OS, browser, app version)
- IP addresses and geolocation data

**ML Model Training Data:**
- Anonymized threat patterns and fraud signatures
- Behavioral analysis data (aggregated and de-identified)
- Network traffic patterns and forensic evidence`
    },
    {
      title: "2. HOW WE USE YOUR INFORMATION",
      content: `We use collected information for:

**Fraud Detection:**
- Real-time analysis of submitted emails, SMS, and calls
- ML model inference and threat scoring
- Pattern matching against known fraud databases
- Behavioral anomaly detection

**Service Delivery:**
- Multi-channel alert delivery (mobile, WhatsApp, web, email)
- Blockchain forensic evidence packaging
- CERT-In reporting and cybercrime integration
- Real-time threat intelligence updates

**Platform Improvement:**
- ML model training and optimization
- Accuracy improvement and false positive reduction
- New threat pattern discovery
- Service performance monitoring

**Legal Compliance:**
- CERT-In mandatory reporting
- Law enforcement cooperation
- Regulatory compliance (IT Act 2000, GDPR where applicable)`
    },
    {
      title: "3. DATA SHARING AND DISCLOSURE",
      content: `We share your data with:

**Government Agencies:**
- CERT-In (Computer Emergency Response Team - India)
- Cybercrime investigation units
- Law enforcement (with valid legal requests)

**Service Providers:**
- Cloud infrastructure providers (AWS, GCP, Azure)
- Payment processors (Stripe, Razorpay)
- WhatsApp Business API partners
- Blockchain network operators

**Threat Intelligence Community:**
- Anonymized threat patterns shared with security researchers
- Aggregated fraud statistics (no personal identifiers)

**We DO NOT:**
- Sell your personal information to third parties
- Share identifiable data without consent or legal obligation
- Use your fraud reports for marketing purposes`
    },
    {
      title: "4. DATA RETENTION",
      content: `**Active Users:**
- Account data: Duration of subscription + 1 year
- Fraud detection history: 2 years from report date
- Forensic evidence packages: 7 years (legal requirement)
- Blockchain records: Permanent (immutable)

**Inactive Users:**
- Account deletion request: 30-day grace period
- Automatic deletion: 3 years after last activity
- Legal hold data: Retained indefinitely if required

**Aggregated/Anonymized Data:**
- ML training datasets: Permanent retention
- Threat intelligence patterns: Permanent retention`
    },
    {
      title: "5. DATA SECURITY",
      content: `Security measures include:

**Encryption:**
- AES-256 encryption at rest
- TLS 1.3 for data in transit
- End-to-end encryption for sensitive communications
- Quantum-resistant cryptography for blockchain

**Access Controls:**
- Multi-factor authentication (MFA) required
- Role-based access control (RBAC)
- Zero-trust security architecture
- Regular access audits

**Infrastructure Security:**
- 4-layer honeypot defense system
- SOAR (Security Orchestration, Automation, Response)
- 24/7 security monitoring
- Regular penetration testing and security audits

**ML Model Protection:**
- Model encryption and obfuscation
- Secure enclave execution
- API rate limiting and anomaly detection`
    },
    {
      title: "6. YOUR RIGHTS",
      content: `You have the right to:

**Access:**
- Request copies of your personal data
- View your fraud detection history
- Access forensic evidence packages
- Download ML model predictions

**Correction:**
- Update account information
- Correct inaccurate data
- Modify alert preferences

**Deletion:**
- Request account deletion (30-day processing)
- Remove specific fraud reports
- Opt-out of ML training (anonymized data retained)

**Restriction:**
- Limit data processing
- Opt-out of CERT-In reporting (where legally permitted)
- Disable specific alert channels

**Portability:**
- Export data in JSON/CSV format
- Transfer forensic evidence to other platforms
- API access to your historical data`
    },
    {
      title: "7. COOKIES AND TRACKING",
      content: `We use:

**Essential Cookies:**
- Session management
- Authentication tokens
- API request tracking

**Analytics Cookies:**
- Google Analytics (anonymized)
- Platform usage statistics
- Performance monitoring

**Preference Cookies:**
- Language selection
- Theme preferences
- Dashboard customization

You can control cookies through browser settings. Disabling essential cookies may limit platform functionality.`
    },
    {
      title: "8. CHILDREN'S PRIVACY",
      content: `SurakshaSetu is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected data from a minor, contact us immediately for deletion.`
    },
    {
      title: "9. INTERNATIONAL DATA TRANSFERS",
      content: `Your data may be transferred to and processed in:
- India (primary servers)
- United States (cloud backup)
- European Union (GDPR compliance)

We ensure adequate protection through:
- Standard Contractual Clauses (SCCs)
- GDPR adequacy decisions
- Data Processing Agreements (DPAs)`
    },
    {
      title: "10. CHANGES TO PRIVACY POLICY",
      content: `We may update this Privacy Policy to reflect:
- Changes in legal requirements
- New features or services
- Security improvements
- User feedback

Significant changes will be notified via:
- Email to registered users
- In-app notifications
- Website banner
- 30-day advance notice for material changes`
    },
    {
      title: "11. CONTACT INFORMATION",
      content: `For privacy inquiries:

**Data Protection Officer:**
Email: privacy@surakshasetu.com
Phone: +91-80-XXXX-XXXX

**Postal Address:**
SurakshaSetu Cybersecurity Pvt. Ltd.
Data Protection Department
Bangalore, Karnataka, India

**Response Time:**
- Privacy requests: 48 hours
- Data deletion: 30 days
- Access requests: 7 days`
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
              / legal / privacy policy
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h1 mb-6"
            >
              PRIVACY POLICY
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

      {/* Privacy Policy Content */}
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
              <h2 className="h3 mb-4">OUR COMMITMENT TO YOUR PRIVACY</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                At SurakshaSetu, we take your privacy seriously. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our AI-powered fraud detection and cybersecurity platform.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                By using SurakshaSetu, you consent to the data practices described in this policy. We comply with the IT Act 2000, GDPR (where applicable), and CERT-In guidelines.
              </p>
            </motion.div>

            {/* Privacy Policy Sections */}
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
                  <div className="text-text-secondary text-base leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-12 mt-12"
            >
              <h2 className="h3 mb-4">QUESTIONS ABOUT YOUR PRIVACY?</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                If you have questions about this Privacy Policy or how we handle your data, please contact our Data Protection Officer at <span className="text-primary">privacy@surakshasetu.com</span>
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                We are committed to resolving privacy concerns and protecting your rights under applicable data protection laws.
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

