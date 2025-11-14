import Header from "@/components/sections/header";
import PricingSection from "@/components/sections/pricing";
import FaqSection from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

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

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-black pt-[120px] md:pt-[140px] lg:pt-[160px] pb-16 md:pb-20 lg:pb-24">
        <DecorativeCorners />
        
        <div className="container relative z-10">
          <div className="text-center max-w-[900px] mx-auto">
            <p className="sub-title mb-4">/ pricing plans</p>
            <h1 className="h1 mb-6">PRICING</h1>
            <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed">
              Choose the perfect security plan for your business. From startups to enterprise organizations, we have flexible solutions that scale with your needs.
            </p>
          </div>
        </div>
      </section>
      
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}