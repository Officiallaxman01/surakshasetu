import Image from "next/image";

const logos = [
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/svgs/6891a2c110a140732ed9feaf_Client_20Logo_20_1_-1.svg", alt: "Client Logo 1" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/svgs/6891a2c1cf30c2901307b56e_Client_20Logo_20_2_-2.svg", alt: "Client Logo 2" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/svgs/6891a2c1a8cb4ebd62264e94_Client_20Logo_20_3_-3.svg", alt: "Client Logo 3" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/svgs/6891a2c11f5f40a0365e9a9b_Client_20Logo_20_4_-4.svg", alt: "Client Logo 4" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/svgs/6891a2c189a56fcddce2c041_Client_20Logo_20_5_-5.svg", alt: "Client Logo 5" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/svgs/6891a2c1c85a62ed893e55ab_Client_20Logo_20_6_-6.svg", alt: "Client Logo 6" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/svgs/6891a2c1fcf25b32d4a1c0ed_Client_20Logo_20_7_-7.svg", alt: "Client Logo 7" },
];

const CornerBracket = ({ className }: { className?: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} stroke="currentColor">
    <path d="M0 40V0H40" strokeWidth="1" />
  </svg>
);

const TrustedCompanies = () => {
  return (
    <div className="container relative -mt-24">
      <div className="relative rounded-lg border border-border bg-card p-10 backdrop-blur-sm sm:p-12">
        <div className="absolute top-0 left-0 -translate-x-px -translate-y-px z-10 text-white/20">
          <CornerBracket />
        </div>
        <div className="absolute top-0 right-0 translate-x-px -translate-y-px z-10 text-white/20">
          <CornerBracket className="rotate-90" />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-px translate-y-px z-10 text-white/20">
          <CornerBracket className="rotate-180" />
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-px translate-y-px z-10 text-white/20">
          <CornerBracket className="-rotate-90" />
        </div>

        <div className="mb-12 text-center">
          <p className="font-medium text-sm text-muted-foreground tracking-[0.1em] uppercase">Trusted by thousands of companies</p>
        </div>

        <div className="relative">
          <div className="w-full overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)" }}>
            <div className="flex w-max animate-marquee">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex h-10 flex-shrink-0 items-center px-8 sm:px-10 lg:px-12">
                  <Image src={logo.url} alt={logo.alt} width={150} height={40} className="w-auto max-h-full object-contain opacity-70" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;