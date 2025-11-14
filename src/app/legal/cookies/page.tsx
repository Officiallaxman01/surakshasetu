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

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      type: "Essential Cookies",
      description: "Required for platform functionality",
      examples: [
        { name: "auth_token", purpose: "Session authentication", duration: "30 days" },
        { name: "csrf_token", purpose: "Security protection", duration: "Session" },
        { name: "session_id", purpose: "User session management", duration: "24 hours" },
        { name: "api_key", purpose: "API authentication", duration: "90 days" }
      ],
      canDisable: false
    },
    {
      type: "Analytics Cookies",
      description: "Help us understand platform usage",
      examples: [
        { name: "_ga", purpose: "Google Analytics (anonymized)", duration: "2 years" },
        { name: "_gid", purpose: "Google Analytics session", duration: "24 hours" },
        { name: "platform_stats", purpose: "Usage analytics", duration: "1 year" },
        { name: "feature_tracking", purpose: "Feature usage monitoring", duration: "6 months" }
      ],
      canDisable: true
    },
    {
      type: "Preference Cookies",
      description: "Remember your settings",
      examples: [
        { name: "language_pref", purpose: "Language selection", duration: "1 year" },
        { name: "theme_mode", purpose: "Dark/light theme", duration: "1 year" },
        { name: "dashboard_layout", purpose: "Dashboard customization", duration: "1 year" },
        { name: "alert_preferences", purpose: "Notification settings", duration: "1 year" }
      ],
      canDisable: true
    },
    {
      type: "Performance Cookies",
      description: "Optimize platform performance",
      examples: [
        { name: "cdn_cache", purpose: "CDN optimization", duration: "7 days" },
        { name: "api_response_cache", purpose: "API response caching", duration: "1 hour" },
        { name: "ml_model_cache", purpose: "ML inference optimization", duration: "24 hours" }
      ],
      canDisable: true
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
              / legal / cookie policy
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h1 mb-6"
            >
              COOKIE POLICY
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

      {/* Cookie Policy Content */}
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
              <h2 className="h3 mb-4">WHAT ARE COOKIES?</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                Cookies are small text files stored on your device when you visit the SurakshaSetu platform. They help us provide a better user experience, remember your preferences, and analyze platform usage.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                We use cookies and similar technologies (local storage, session storage, indexedDB) to enhance platform functionality, security, and performance.
              </p>
            </motion.div>

            {/* Cookie Types */}
            <div className="space-y-6">
              {cookieTypes.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 lg:p-8"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="h5 text-white mb-2">{category.type}</h3>
                      <p className="text-text-secondary text-sm">{category.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-monospace ${
                      category.canDisable ? 'bg-primary/20 text-primary' : 'bg-green-500/20 text-green-400'
                    }`}>
                      {category.canDisable ? 'Optional' : 'Required'}
                    </span>
                  </div>

                  <div className="space-y-3 mt-6">
                    {category.examples.map((cookie, cookieIndex) => (
                      <div key={cookieIndex} className="bg-background border border-border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <code className="text-sm text-primary font-mono">{cookie.name}</code>
                          <span className="text-xs text-text-muted">{cookie.duration}</span>
                        </div>
                        <p className="text-sm text-text-secondary">{cookie.purpose}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Third-Party Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 mt-8"
            >
              <h3 className="h5 mb-4 text-white">THIRD-PARTY COOKIES</h3>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                We use third-party services that may set cookies:
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-white">Google Analytics:</strong> Anonymized usage statistics and platform performance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-white">Stripe/Razorpay:</strong> Payment processing and fraud prevention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-white">AWS/GCP/Azure:</strong> Cloud infrastructure optimization and CDN caching</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-white">WhatsApp Business API:</strong> Bot integration and message delivery</span>
                </li>
              </ul>
            </motion.div>

            {/* Cookie Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 mt-8"
            >
              <h3 className="h5 mb-4 text-white">HOW TO MANAGE COOKIES</h3>
              <div className="space-y-4 text-text-secondary">
                <div>
                  <h4 className="text-white font-semibold mb-2">Browser Settings</h4>
                  <p className="text-sm leading-relaxed">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                    <li>View and delete cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Block cookies from specific sites</li>
                    <li>Clear all cookies when closing the browser</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Platform Cookie Preferences</h4>
                  <p className="text-sm leading-relaxed">
                    Access cookie preferences in your account settings:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                    <li>Dashboard → Settings → Privacy → Cookie Preferences</li>
                    <li>Toggle analytics cookies on/off</li>
                    <li>Customize performance and preference cookies</li>
                    <li>Export cookie usage report</li>
                  </ul>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
                  <p className="text-yellow-400 text-sm">
                    <strong>Note:</strong> Disabling essential cookies will prevent you from using critical platform features like authentication, fraud detection, and real-time alerts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Do Not Track */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 mt-8"
            >
              <h3 className="h5 mb-4 text-white">DO NOT TRACK SIGNALS</h3>
              <p className="text-text-secondary text-base leading-relaxed">
                We honor Do Not Track (DNT) browser signals. When DNT is enabled, we:
              </p>
              <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-text-secondary">
                <li>Disable analytics cookies</li>
                <li>Minimize data collection to essential functions only</li>
                <li>Do not share anonymized usage data</li>
                <li>Respect your privacy preferences</li>
              </ul>
            </motion.div>

            {/* Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-12 mt-12"
            >
              <h2 className="h3 mb-4">UPDATES TO COOKIE POLICY</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4">
                We may update this Cookie Policy to reflect changes in our practices or legal requirements. Significant changes will be notified via email and in-app alerts.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                For questions about cookies or this policy, contact <span className="text-primary">privacy@surakshasetu.com</span>
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

