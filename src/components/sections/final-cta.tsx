import React from 'react';
import Link from 'next/link';

const CornerBrackets = () => (
  <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
    <svg className="absolute top-0 left-0 w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 1H1V40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
    </svg>
    <svg className="absolute top-0 right-0 w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H39V40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
    </svg>
    <svg className="absolute bottom-0 left-0 w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 39H1V0" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
    </svg>
    <svg className="absolute bottom-0 right-0 w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 39H39V0" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
    </svg>
  </div>
);

const FinalCta = () => {
    return (
        <section
            role="region"
            aria-label="Call to Action Section"
            className="relative overflow-hidden bg-black py-[120px] lg:py-20 md:py-16"
        >
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/6887471d4a0e0e224c79a9f3_2F689244146c7e13efd8be31b-18.jpg"
                >
                    <source src="https://cdn.prod.website-files.com/6887471d4a0e0e224c79a9f3%2F689244146c7e13efd8be31b7_7020018_Particle_Dot_3840x2160-transcode.mp4" type="video/mp4" />
                    <source src="https://cdn.prod.website-files.com/6887471d4a0e0e224c79a9f3%2F689244146c7e13efd8be31b7_7020018_Particle_Dot_3840x2160-transcode.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="container relative z-10">
                <CornerBrackets />
                <div className="flex flex-col items-center text-center gap-8">
                    <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto">
                        <h2 className="h2">Ready to Protect Yourself from Fraud?</h2>
                        <p className="max-w-3xl text-text-secondary">
                            Get real-time AI-powered fraud detection with instant alerts via mobile app, WhatsApp, and web dashboard. Start protecting yourself today with 95%+ accuracy and sub-100ms latency.
                        </p>
                    </div>
                    <Link
                        href="/auth/login"
                        className="btn-text inline-block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border border-green-500/50 px-8 py-4 text-white font-monospace uppercase transition-all duration-300 hover:shadow-[0_10px_40px_rgba(34,197,94,0.4)]"
                    >
                        GET FREE SECURITY AUDIT
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FinalCta;