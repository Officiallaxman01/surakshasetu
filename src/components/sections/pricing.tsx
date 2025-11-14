"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Plan = {
  name: string;
  description: string;
  price: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Individual Plan",
    description: "Perfect for individuals seeking protection from email, SMS, and financial fraud.",
    price: "$29",
    features: [
      "Email fraud detection (SPF/DKIM/DMARC)",
      "SMS/Call fraud detection",
      "Financial fraud monitoring",
      "Mobile app access",
      "WhatsApp bot alerts",
      "Basic forensic evidence collection",
      "Email support",
    ],
  },
  {
    name: "Business Plan",
    description: "Comprehensive protection for small and medium businesses with team management.",
    price: "$199",
    features: [
      "Everything in Individual Plan",
      "Web dashboard access",
      "Team management (up to 25 users)",
      "Advanced AI threat intelligence",
      "Multi-layer honeypot defense",
      "Blockchain forensics",
      "Priority support (2-hour response)",
      "CERT-In integration",
    ],
  },
  {
    name: "Enterprise Plan",
    description: "Full-scale protection for enterprises, financial institutions, and government organizations.",
    price: "$999",
    features: [
      "Everything in Business Plan",
      "Unlimited users and devices",
      "Custom AI model training",
      "Dedicated security advisor",
      "4-layer honeypot defense system",
      "Advanced threat intelligence feeds",
      "SOAR integration",
      "White-glove support (30-min response)",
      "Custom compliance frameworks",
      "99.99% uptime SLA",
    ],
  },
];

const DecorativeCorner = ({ position }: { position: string }) => {
  const paths: { [key: string]: string } = {
    'top-left': 'M40 1H1V40',
    'top-right': 'M0 1H39V40',
    'bottom-left': 'M1 0V39H40',
    'bottom-right': 'M0 39H39V0',
  };
  const positionClasses: { [key: string]: string } = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute hidden md:block ${positionClasses[position]}`}
      aria-hidden="true"
    >
      <path d={paths[position]} stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1"/>
    </svg>
  );
};

const PricingCard = ({ plan, index }: { plan: Plan; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-secondary via-secondary/90 to-secondary hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,0,0,0.25)]">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{ backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/688f288cf7efb2b3de9726b7_Pricing_20Card_20BG-17.avif')` }}
        />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/10 transition-all duration-500 blur-xl -z-10" />
        
        <div className="relative z-10 flex h-full flex-col p-10">
          <div>
            <h3 className="sub-title group-hover:text-primary transition-colors">{plan.name}</h3>
            <p className="mt-4 text-sm text-text-muted">{plan.description}</p>
            <div className="mt-6 mb-8">
              <span className="font-primary text-5xl font-bold text-white">{plan.price}</span>
              <span className="text-text-muted">/Month</span>
            </div>
            <div className="my-8 h-px w-full bg-border group-hover:bg-primary/50 transition-colors"></div>
            <p className="h5 text-white">Includes:</p>
            <ul className="mt-4 space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 + featureIndex * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm text-text-secondary">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-8">
            <a
              href="/contact"
              className="btn-text group/btn relative block w-full border border-white/20 bg-transparent py-4 text-center text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
            >
              GET STARTED
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
    return (
      <section className="bg-black py-20 md:py-[120px]">
        <div className="container relative">
          <DecorativeCorner position="top-left" />
          <DecorativeCorner position="top-right" />
          
          <div className="mx-auto max-w-4xl text-center">
            <p className="sub-title">/ PRICING PLAN</p>
            <h2 className="h2 mt-4">Flexible Plans for Every Level of Security</h2>
            <p className="mt-6 text-text-secondary">
              Whether you're a startup or an enterprise, SurakshaSetu offers the right protection at the right scale — without complexity.
            </p>
          </div>
  
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>

          <DecorativeCorner position="bottom-left" />
          <DecorativeCorner position="bottom-right" />
        </div>
      </section>
    );
};
  
export default PricingSection;