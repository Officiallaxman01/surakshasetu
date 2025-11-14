"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import FinalCta from "@/components/sections/final-cta";
import { ProfileCard } from "@/components/ui/profile-card";
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

const StatisticsSection = () => {
  const stats = [
    { number: "95%+", label: "Fraud Detection Accuracy" },
    { number: "<100ms", label: "AI Inference Latency" },
    { number: "4-Layer", label: "Honeypot Defense System" },
    { number: "24/7", label: "Real-Time Monitoring" },
  ];

  return (
    <section className="relative bg-black py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 text-center"
            >
              <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-monospace">
                {stat.number}
              </h3>
              <p className="text-text-secondary text-sm md:text-base font-monospace uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PillarsSection = () => {
  const pillars = [
    {
      icon: "🤖",
      title: "AI-Powered Detection",
      description: "Advanced ML models with ensemble methods, deep learning, and explainable AI. 95%+ accuracy with sub-100ms latency.",
    },
    {
      icon: "📱",
      title: "Multi-Channel Integration",
      description: "Seamless integration across mobile app (Flutter), web dashboard (React), and WhatsApp bot for instant alerts.",
    },
    {
      icon: "🔒",
      title: "Blockchain Forensics",
      description: "Tamper-proof evidence collection with immutable logging. Automated forensic packages for legal proceedings.",
    },
  ];

  return (
    <section className="relative bg-black py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h2 className="h2 mb-6">THE PILLARS BEHIND SURAKSHASETU PROTECTION</h2>
          <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed">
            We're Built on Trusted People, Real-Time Technology, and Tailored Strategies to Deliver Cybersecurity that Adapts, Evolves, and Lasts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl mb-6">{pillar.icon}</div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4 font-monospace uppercase">
                {pillar.title}
              </h3>
              <p className="text-text-secondary text-base leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustedBySection = () => {
  return (
    <section className="relative bg-black py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h2 className="h2 mb-6">TRUSTED BY INDUSTRY LEADERS</h2>
          <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed">
            Join the Growing Network of Companies who Rely on Us to Secure their Digital Operations.
          </p>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-8 opacity-60">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-white/10 rounded-lg flex items-center justify-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertsSection = () => {
  const experts = [
    { 
      name: "LAXMAN SINGH", 
      title: "Chief AI Scientist - ML & Deep Learning", 
      emoji: "👨‍💻", 
      description: "Leading AI research with 15+ years in machine learning, deep learning, and neural network architectures. Published 50+ papers in top-tier conferences on fraud detection and anomaly detection systems.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    { 
      name: "CHANDAN PANDEY", 
      title: "CTO - Platform Architecture & Security", 
      emoji: "👨‍💼", 
      description: "Expert in distributed systems and cybersecurity with 20+ years experience. Architected security platforms protecting millions of users across financial and government sectors.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    { 
      name: "YASH YADAV", 
      title: "Head of Fraud Detection - NLP & Behavioral Analysis", 
      emoji: "👨‍🔬", 
      description: "Specializes in NLP and behavioral pattern analysis. Built fraud detection systems for major financial institutions across India with 95%+ accuracy rates.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
  ];

  return (
    <section className="relative bg-black py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sub-title mb-4"
          >
            / our team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h2 mb-6"
          >
            EXPERTS BEHIND SURAKSHASETU'S INTELLIGENCE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed"
          >
            A world-class team of AI researchers, cybersecurity experts, ML engineers, and security architects building the next generation of fraud detection and threat protection systems.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {experts.map((expert, index) => (
            <ProfileCard
              key={index}
              name={expert.name}
              title={expert.title}
              description={expert.description}
              emoji={expert.emoji}
              social={expert.social}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyValuesSection = () => {
  const values = [
    {
      number: "01",
      title: "Innovation First",
      description: "Pioneering next-generation AI-powered fraud detection systems with cutting-edge machine learning and deep learning technologies.",
      icon: "🚀",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/30",
    },
    {
      number: "02",
      title: "Security Excellence",
      description: "Maintaining the highest standards of cybersecurity with zero-trust architecture, quantum-resistant encryption, and multi-layered defense systems.",
      icon: "🔒",
      color: "from-red-500/20 to-red-600/10",
      borderColor: "border-red-500/30",
    },
    {
      number: "03",
      title: "Customer Trust",
      description: "Building long-term relationships through transparency, reliability, and unwavering commitment to protecting our users' digital assets.",
      icon: "🤝",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-500/30",
    },
    {
      number: "04",
      title: "Continuous Learning",
      description: "Adapting to evolving cyber threats through continuous model training, threat intelligence updates, and real-time anomaly detection.",
      icon: "📚",
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-500/30",
    },
    {
      number: "05",
      title: "Ethical AI",
      description: "Developing responsible AI systems with explainability, fairness, privacy protection, and compliance with global data regulations.",
      icon: "⚖️",
      color: "from-yellow-500/20 to-yellow-600/10",
      borderColor: "border-yellow-500/30",
    },
    {
      number: "06",
      title: "Performance at Scale",
      description: "Delivering sub-100ms latency with 95%+ accuracy across millions of daily transactions using optimized microservices architecture.",
      icon: "⚡",
      color: "from-cyan-500/20 to-cyan-600/10",
      borderColor: "border-cyan-500/30",
    },
  ];

  const achievements = [
    { metric: "95%+", label: "Detection Accuracy", icon: "🎯" },
    { metric: "<100ms", label: "Response Latency", icon: "⚡" },
    { metric: "10M+", label: "Threats Blocked", icon: "🛡️" },
    { metric: "50K+", label: "Active Users", icon: "👥" },
    { metric: "99.9%", label: "Uptime SLA", icon: "✅" },
    { metric: "24/7", label: "Monitoring", icon: "👁️" },
  ];

  const partnerships = [
    { name: "CERT-In", type: "Government", description: "Official integration for automated threat reporting" },
    { name: "NASSCOM", type: "Industry", description: "Member of cybersecurity excellence council" },
    { name: "ISO 27001", type: "Certification", description: "International security management standard" },
    { name: "SOC 2 Type II", type: "Compliance", description: "Audited security and availability controls" },
  ];

  return (
    <>
      {/* Company Values */}
      <section className="relative bg-black py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sub-title mb-4"
            >
              / our values
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h2 mb-6"
            >
              CORE VALUES DRIVING OUR MISSION
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed"
            >
              Our commitment to excellence is built on six fundamental principles that guide every decision we make and every line of code we write.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative bg-gradient-to-br ${value.color} border-2 ${value.borderColor} rounded-2xl p-8 hover:border-opacity-80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]`}>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10`} />

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary font-monospace text-sm font-bold">
                    {value.number}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 font-monospace uppercase">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative bg-black py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container relative">
          <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sub-title mb-4"
            >
              / achievements
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h2 mb-6"
            >
              PROVEN TRACK RECORD OF EXCELLENCE
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-monospace">
                    {achievement.metric}
                  </div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider">
                    {achievement.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships & Certifications */}
      <section className="relative bg-black py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sub-title mb-4"
            >
              / partnerships
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h2 mb-6"
            >
              TRUSTED BY INDUSTRY LEADERS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-base md:text-lg leading-relaxed"
            >
              Our partnerships and certifications reflect our commitment to maintaining the highest standards of security, compliance, and excellence in cybersecurity.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="flex flex-col h-full">
                    <span className="text-xs text-primary font-monospace uppercase tracking-wider mb-2">
                      {partnership.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 font-monospace">
                      {partnership.name}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                      {partnership.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const InsightsSection = () => {
  const insights = [
    {
      date: "JULY 26, 2023",
      title: "HOW AI IS SHAPING CYBERSECURITY IN 2023",
      description: "Discover How Artificial Intelligence is Revolutionizing Threat Detection, Response Automation, and the Future of Digital Defense.",
      image: "🖥️",
    },
    {
      date: "JULY 26, 2023",
      title: "TOP 5 THREATS TO WATCH IN THE DIGITAL SUPPLY CHAIN",
      description: "Uncover the Latest Vulnerabilities Targeting Cloud, Supply Chain, and IoT Infrastructures to Stay Protected.",
      image: "🔒",
    },
  ];

  return (
    <section className="relative bg-black py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h2 className="h2 mb-6">INSIGHTS THAT KEEP YOU AHEAD</h2>
          <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed">
            Explore Expert Perspectives, Latest Trends, and Technology Trends Shaping the Future of Cybersecurity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <div className="aspect-video bg-white/10 flex items-center justify-center text-6xl">
                {insight.image}
              </div>
              <div className="p-6">
                <p className="text-text-muted text-xs font-monospace uppercase mb-3">
                  {insight.date}
                </p>
                <h3 className="text-white text-xl font-bold mb-3 font-monospace uppercase">
                  {insight.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-primary font-monospace text-sm uppercase tracking-wider hover:underline"
          >
            VIEW ALL ARTICLES
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const QuoteSection = () => {
  return (
    <section className="relative bg-black py-16 md:py-20 lg:py-24">
      <div className="container relative">
        <DecorativeCorners />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="text-white text-8xl md:text-9xl font-serif mb-8 opacity-20">
            "
          </div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-monospace leading-tight"
          >
            MILLIONS MAY BUILD WALLS ONLINE. BUT ONLY A FEW ENGINEER DEFENSES THAT ADAPT, LEARN, AND STRIKE BACK.
          </motion.blockquote>
          <p className="text-text-secondary text-sm md:text-base font-monospace uppercase tracking-wider">
            Jonathan SurakshaSetu's Lead Researcher - The Anticipation, Evasion, and Defense Mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-black pt-[120px] md:pt-[140px] lg:pt-[160px] pb-16 md:pb-20 lg:pb-24">
        <DecorativeCorners />
        
        <div className="container relative z-10">
          <div className="text-center max-w-[900px] mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sub-title mb-4"
            >
              / about
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h1 mb-6"
            >
              AI-POWERED FRAUD DETECTION & CYBERSECURITY PLATFORM
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed"
            >
              Enterprise-grade cybersecurity ecosystem protecting users from email fraud, SMS/call scams, financial fraud, and cyber threats. Real-time AI-powered detection with 95%+ accuracy, sub-100ms latency, and instant multi-channel alerts via mobile app, web dashboard, and WhatsApp bot.
            </motion.p>
          </div>
        </div>
      </section>

      <StatisticsSection />
      <PillarsSection />
      <TrustedBySection />
      <ExpertsSection />
      <CompanyValuesSection />
      <InsightsSection />
      <QuoteSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
