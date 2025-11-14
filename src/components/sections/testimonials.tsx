"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonialsData = [
  {
    quote: '"SurakshaSetu detected a phishing email before I could click it. The WhatsApp alert saved me from a potential financial loss."',
    name: 'Priya Sharma',
    role: 'Small Business Owner',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/688aca8c0c1d042d1d37b34c_image_container-4.avif',
  },
  {
    quote: '"The real-time fraud detection is incredible. We\'ve prevented multiple payment fraud attempts thanks to instant alerts."',
    name: 'Rajesh Kumar',
    role: 'Finance Manager at TechCorp',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/688aca8c0c1d042d1d37b34d_image_container2-5.avif',
  },
  {
    quote: '"The blockchain forensics feature provided us with tamper-proof evidence that helped in our legal case against fraudsters."',
    name: 'Anita Desai',
    role: 'Legal Counsel at SecureBank',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/688aca8c0c1d042d1d37b34e_image_container3-6.avif',
  },
  {
    quote: '"Multi-channel alerts mean we never miss a threat. The mobile app, WhatsApp, and web dashboard all sync perfectly."',
    name: 'Vikram Singh',
    role: 'IT Security Lead at FinTech Solutions',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/688aca8c0c1d042d1d37b34f_image_container4-7.avif',
  },
  {
    quote: '"The 4-layer honeypot defense caught an advanced persistent threat that traditional security missed. Outstanding protection."',
    name: 'Meera Patel',
    role: 'CISO at Enterprise Systems',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/688aca8c0c1d042d1d37b350_image_container5-8.avif',
  },
  {
    quote: '"95%+ accuracy with sub-100ms latency. The AI-powered detection is faster and more accurate than any solution we\'ve tried."',
    name: 'Arjun Reddy',
    role: 'CTO at Digital Payments Inc.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/688aca8c0c1d042d1d37b351_image_container6-9.avif',
  },
];

const DecorativeParticle = ({ className }: { className?: string }) => (
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

const QuoteIcon = () => (
    <svg width="40" height="31" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 h-auto w-10 text-primary">
      <path d="M12.96 30.0798L0 17.1998V-0.000198364H16.8V17.1998L3.84 30.0798H12.96V-0.000198364H11.28V-1.8002H18.48V31.8798H12.96V30.0798Z" fill="currentColor"></path>
      <path d="M36.96 30.0798L24 17.1998V-0.000198364H40.8V17.1998L27.84 30.0798H36.96V-0.000198364H35.28V-1.8002H42.48V31.8798H36.96V30.0798Z" fill="currentColor"></path>
    </svg>
);

const Testimonials = () => {
  return (
    <section className="bg-black py-[120px]">
      <div className="container">
        <div className="relative bg-[#0d0d0d] p-10 md:p-20 rounded-2xl border border-border">
          <DecorativeParticle className="absolute top-5 left-5 text-decorative-border" />
          <DecorativeParticle className="absolute top-5 right-5 rotate-90 text-decorative-border" />
          <DecorativeParticle className="absolute bottom-5 left-5 -rotate-90 text-decorative-border" />
          <DecorativeParticle className="absolute bottom-5 right-5 rotate-180 text-decorative-border" />

          <div className="text-center mb-12">
            <p className="sub-title mb-4">/ Trusted Voices</p>
            <h2 className="h2 max-w-[800px] mx-auto">What Our Clients Say About SurakshaSetu</h2>
            <p className="text-text-secondary text-lg mt-4 max-w-[630px] mx-auto">
              Trusted by leaders across industries — see how we’ve helped teams stay secure, confident, and ahead of threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.2,
              });

              return (
                <motion.div
                  key={testimonial.name}
                  ref={ref}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative flex flex-col overflow-hidden text-left bg-gradient-to-br from-card via-card/90 to-card p-10 rounded-xl border border-border transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_20px_60px_rgba(255,0,0,0.2)]">
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/688ecc7d012cc1815269e741_Testimonial_20Card_20BG-16.avif')",
                  }}
                ></div>
                <div className="relative z-10 flex flex-col h-full">
                  <QuoteIcon />
                  <p className="text-white text-lg font-medium mb-8 grow">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h5 className="h5 text-base">{testimonial.name}</h5>
                      <p className="text-sm text-text-secondary">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;