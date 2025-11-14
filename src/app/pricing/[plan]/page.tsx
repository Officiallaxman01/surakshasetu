"use client";

import { use } from "react";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Check, ArrowLeft } from "lucide-react";

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

const pricingPlans: Record<string, any> = {
  "starter": {
    name: "Starter Plan",
    price: 299,
    description: "Perfect for small teams and growing businesses that need essential cybersecurity protection.",
    features: [
      "Basic threat monitoring",
      "Monthly security scans",
      "Email support (24-hour response)",
      "Up to 10 devices",
      "Quarterly security reports",
      "Standard firewall protection",
      "Basic malware detection"
    ],
    limitations: [
      "No 24/7 monitoring",
      "No penetration testing",
      "Limited support hours"
    ]
  },
  "enterprise": {
    name: "Enterprise Plan",
    price: 699,
    description: "Comprehensive security solution for growing businesses that require advanced protection and compliance.",
    features: [
      "24/7 threat monitoring",
      "Bi-weekly penetration testing",
      "Priority support (2-hour response)",
      "Unlimited devices",
      "Compliance audits (GDPR, ISO)",
      "Advanced firewall + IDS/IPS",
      "Real-time threat intelligence",
      "Monthly executive reports",
      "Dedicated security advisor",
      "Incident response team"
    ],
    limitations: [
      "No AI threat prediction",
      "Standard SLA (99.5%)"
    ]
  },
  "quantum": {
    name: "Quantum Plan",
    price: 2000,
    description: "Ultimate security solution for mission-critical infrastructure with AI-powered protection and white-glove service.",
    features: [
      "Everything in Enterprise",
      "AI-powered threat prediction",
      "Weekly penetration testing",
      "White-glove support (30-min response)",
      "Unlimited devices + endpoints",
      "Custom compliance frameworks",
      "Zero-day vulnerability protection",
      "Real-time analytics dashboard",
      "Dedicated security operations center",
      "Red team exercises",
      "Priority SLA (99.99% uptime)",
      "Custom security integrations",
      "Executive briefings"
    ],
    limitations: []
  }
};

export default function PricingDetailsPage({ params }: { params: Promise<{ plan: string }> }) {
  const { plan } = use(params);
  const planDetails = pricingPlans[plan] || pricingPlans["enterprise"];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-[100px]">
        <section className="relative bg-black py-[120px] lg:py-20 md:py-15">
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
          
          <div className="container max-w-[1000px]">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Pricing
            </Link>

            <div className="bg-card border border-border rounded-2xl p-12 mb-12">
              <p className="sub-title text-sm mb-3">{planDetails.name.toUpperCase()}</p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-6xl font-bold text-white">${planDetails.price}</span>
                <span className="text-text-secondary text-xl">/month</span>
              </div>
              <p className="text-text-secondary text-lg mb-8">{planDetails.description}</p>
              <Link 
                href="/contact" 
                className="btn-text bg-primary hover:bg-accent-hover text-primary-foreground px-8 py-4 transition-colors inline-block"
              >
                GET STARTED
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h2 className="h3 mb-6">What's Included</h2>
                <ul className="space-y-4">
                  {planDetails.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      </div>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div>
                {planDetails.limitations.length > 0 && (
                  <div className="mb-8">
                    <h3 className="h4 mb-4">Limitations</h3>
                    <ul className="space-y-3">
                      {planDetails.limitations.map((limitation: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-text-muted">
                          <span className="mt-1">•</span>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-secondary border border-border rounded-xl p-6">
                  <h3 className="h4 mb-4">Need Help Choosing?</h3>
                  <p className="text-text-secondary mb-4">
                    Our security experts can help you find the perfect plan for your organization's specific needs.
                  </p>
                  <Link 
                    href="/contact" 
                    className="btn-text border border-border hover:bg-white hover:text-black text-white px-6 py-3 transition-colors inline-block"
                  >
                    TALK TO AN EXPERT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
