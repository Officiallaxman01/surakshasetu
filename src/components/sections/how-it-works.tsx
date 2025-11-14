import Image from 'next/image';
import { Mail, Brain, Bell, FileSearch } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type IconConfig = 
  | { type: 'component'; Component: LucideIcon }
  | { type: 'image'; src: string; alt: string };

const processSteps: Array<{
  step: string;
  title: string;
  description: string;
  icon: IconConfig;
}> = [
  {
    step: "01",
    title: "Input Detection & Preprocessing",
    description: "User submits email, SMS, or call data through mobile app (Flutter), web dashboard (React), or WhatsApp bot. Real-time input validation, sanitization, and feature extraction. Multi-language text preprocessing with tokenization and encoding. Voice pattern extraction for call analysis. Image and attachment scanning for email content.",
    icon: {
      type: 'component',
      Component: Mail,
    },
  },
  {
    step: "02",
    title: "AI-Powered Multi-Model Analysis",
    description: "Hybrid detection engine: Rules-based filtering for known patterns (high precision), ML ensemble models (XGBoost, LightGBM, CatBoost) for fuzzy cases, Deep learning (LSTM, Transformers) for complex patterns, Graph Neural Networks for relationship analysis, Behavioral analysis for anomaly detection. Sub-100ms inference with 95%+ accuracy. Explainable AI (SHAP/LIME) generates threat explanations.",
    icon: {
      type: 'component',
      Component: Brain,
    },
  },
  {
    step: "03",
    title: "Instant Multi-Channel Alert Distribution",
    description: "Real-time alert delivery via WebSocket to mobile app (<20ms latency), WhatsApp bot with multi-language TTS support, Web dashboard with live updates, Email notifications with detailed threat reports. Simultaneous multi-channel delivery ensures zero missed alerts. Evidence extraction includes screenshots, network logs, and threat indicators. Forensic logging begins immediately.",
    icon: {
      type: 'component',
      Component: Bell,
    },
  },
  {
    step: "04",
    title: "Blockchain Forensics & CERT-In Integration",
    description: "Automated blockchain-based immutable evidence logging with cryptographic hashing (SHA-256). Generates tamper-proof forensic packages including complete threat timeline, network traffic logs, behavioral patterns, and ML model confidence scores. Court-admissible evidence packages for legal proceedings. Automated CERT-In reporting for cybercrime authorities. Complete audit trail with blockchain verification for chain of custody.",
    icon: {
      type: 'component',
      Component: FileSearch,
    },
  },
];

const DecorativeBrackets = () => (
  <>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-10 h-10 text-decorative-border">
      <path d="M40 1H1V40" stroke="currentColor" strokeWidth="1"/>
    </svg>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 w-10 h-10 text-decorative-border">
      <path d="M0 1H39V40" stroke="currentColor" strokeWidth="1"/>
    </svg>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 w-10 h-10 text-decorative-border">
      <path d="M40 39H1V0" stroke="currentColor" strokeWidth="1"/>
    </svg>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-10 h-10 text-decorative-border">
      <path d="M0 39H39V0" stroke="currentColor" strokeWidth="1"/>
    </svg>
  </>
);

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/6887471d4a0e0e224c79a9f3_2F688f4f611a027942c4395bb-15.jpg"
        >
          <source src="https://cdn.prod.website-files.com/6887471d4a0e0e224c79a9f3%2F688f4f611a027942c4395bb6_7889_Particles_Particle_1920x1080%20%281%29%20%281%29-transcode.mp4" type="video/mp4" />
          <source src="https://cdn.prod.website-files.com/6887471d4a0e0e224c79a9f3%2F688f4f611a027942c4395bb6_7889_Particles_Particle_1920x1080%20%281%29%20%281%29-transcode.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container relative z-10">
        <div className="relative border border-decorative-border rounded-lg p-8 md:p-12 lg:p-20">
          <DecorativeBrackets />
          <div className="flex flex-col items-center text-center gap-6 max-w-[800px] mx-auto">
            <p className="sub-title">/ how it works</p>
            <h2 className="h2">How SurakshaSetu Detects & Prevents Fraud</h2>
            <p className="text-base text-text-secondary">
              Real-time AI-powered fraud detection with instant multi-channel alerts. From input to forensic evidence collection in under 200ms.
            </p>
          </div>

          <div className="mt-16 w-full max-w-4xl mx-auto flex flex-col gap-5">
            {processSteps.map((item, index) => (
              <div key={item.step} className="flex items-start gap-6 md:gap-10">
                <div className="relative flex-shrink-0">
                  <div className="w-[70px] h-[70px] rounded-full border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center">
                    {item.icon.type === 'image' ? (
                      <Image src={item.icon.src} alt={item.icon.alt} width={30} height={30} className="w-[30px] h-[30px]" />
                    ) : (
                      <item.icon.Component className="w-[30px] h-[30px] text-primary" />
                    )}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-px h-[calc(100%_+_20px)] bg-border"></div>
                  )}
                </div>
                <div className="bg-card/80 border border-border rounded-xl backdrop-blur-sm p-6 md:p-8 flex-grow">
                  <div className="flex items-baseline gap-5">
                    <span className="font-monospace text-4xl text-white/20">{item.step}</span>
                    <h3 className="h4">{item.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary mt-2.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;