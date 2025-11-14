import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Helper component for decorative corner brackets
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

const HowQuantraWorks = () => {
  return (
    <section className="relative bg-black py-16 md:py-20 lg:py-[120px] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(139,0,0,0.25)] via-[rgba(139,0,0,0.1)] to-transparent" />

      <div className="container relative z-10">
        <div className="relative border border-border rounded-2xl p-8 md:p-12 lg:p-16 xl:p-20">
          <DecorativeCorners />
          
          <div className="max-w-3xl">
            <p className="sub-title mb-4">/ HOW IT WORKS</p>
            <h2 className="h2 mb-6">
              HOW SURAKSHASETU SECURES YOUR BUSINESS
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-text-secondary">
              From assessment to ongoing protection, our process is built for speed, clarity, and results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowQuantraWorks;