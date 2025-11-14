import Header from "@/components/sections/header";
import FaqSection from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

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

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-[100px]">
        {/* Hero Section */}
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
          
          <div className="container">
            <div className="text-center max-w-[900px] mx-auto">
              <p className="sub-title">/ frequently asked questions</p>
              <h1 className="h1 mt-4 mb-6">FAQ</h1>
              <p className="text-text-secondary text-lg">
                Find answers to the most common questions about SurakshaSetu's cybersecurity services, implementation, and how we protect your business.
              </p>
            </div>
          </div>
        </section>
        
        <FaqSection />
        <FinalCta />
      </div>
      <Footer />
    </main>
  );
}
