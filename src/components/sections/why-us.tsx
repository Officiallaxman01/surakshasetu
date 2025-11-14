import Image from "next/image";
import { getSupabaseImageUrl, IMAGE_PATHS } from "@/lib/constants";

const features = [
  {
    icon: getSupabaseImageUrl(IMAGE_PATHS.securityShield),
    title: "AI-Powered Detection",
    description: "Advanced ML models with ensemble methods, deep learning, and explainable AI. 95%+ accuracy with sub-100ms latency.",
    alt: "Orange security shield icon with a lock symbol",
  },
  {
    icon: getSupabaseImageUrl(IMAGE_PATHS.alarmClock),
    title: "Real-Time Multi-Channel Alerts",
    description: "Instant alerts via mobile app, WhatsApp, web dashboard, and email. WebSocket real-time communication with <20ms latency.",
    alt: "Red alarm clock icon",
  },
  {
    icon: getSupabaseImageUrl(IMAGE_PATHS.trophyAward),
    title: "Blockchain Forensics",
    description: "Tamper-proof evidence collection with immutable logging. Automated forensic packages for legal proceedings and CERT-In reporting.",
    alt: "Golden trophy award icon",
  },
];

const DecorativeCorners = () => (
  <>
    <div className="absolute top-0 left-0">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 1H1V40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
      </svg>
    </div>
    <div className="absolute top-0 right-0">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H39V40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
      </svg>
    </div>
    <div className="absolute bottom-0 left-0">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 39H1V0" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
      </svg>
    </div>
    <div className="absolute bottom-0 right-0">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 39H39V0" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
      </svg>
    </div>
  </>
);

const WhyUsSection = () => {
  return (
    <section className="relative bg-black py-16 md:py-20 lg:py-[120px] overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          poster={getSupabaseImageUrl(IMAGE_PATHS.videoPoster)}
        >
          <source src="https://cdn.prod.website-files.com/6887471d4a0e0e224c79a9f3%2F68923d867394dd666fd91170_7067678_Animation_Network_3840x2160%20%281%29-transcode.webm" type="video/webm" />
          <source src="https://cdn.prod.website-files.com/6887471d4a0e0e224c79a9f3%2F68923d867394dd666fd91170_7067678_Animation_Network_3840x2160%20%281%29-transcode.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container relative z-10">
        <div className="relative border border-border rounded-2xl p-8 md:p-12 lg:p-16 xl:p-20">
          <DecorativeCorners />
          
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="sub-title mb-4">/ why us</p>
            <h2 className="h2 mb-6 max-w-4xl mx-auto">
              WHY SURAKSHASETU? BECAUSE SECURITY CAN'T WAIT.
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-text-secondary max-w-3xl mx-auto">
              Enterprise-grade platform combining AI-powered fraud detection (95%+ accuracy, sub-100ms latency), multi-layer security architecture (4-layer honeypot defense), blockchain forensics, and seamless integration across mobile app (Flutter), web dashboard (React), and WhatsApp bot. Real-time threat intelligence, explainable AI, and automated CERT-In reporting.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center transition-all duration-300 hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,0,0,0.2)]"
              >
                <div className="relative w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] mb-6 lg:mb-8">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 1024px) 100px, 120px"
                    className="object-contain"
                  />
                </div>
                <h3 className="h4 mb-4 text-white">{feature.title}</h3>
                <p className="text-base leading-relaxed text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;