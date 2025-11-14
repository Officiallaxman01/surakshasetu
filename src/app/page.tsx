import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import TrustedCompanies from "@/components/sections/trusted-companies";
import StatsShowcase from "@/components/sections/stats-showcase";
import AboutUsSection from "@/components/sections/about-us";
import ServicesSection from "@/components/sections/services";
import WhyUsSection from "@/components/sections/why-us";
import HowItWorksSection from "@/components/sections/how-it-works";
import TechStack from "@/components/sections/tech-stack";
import ArchitectureShowcase from "@/components/sections/architecture-showcase";
import CaseStudies from "@/components/sections/case-studies";
import Testimonials from "@/components/sections/testimonials";
import PricingSection from "@/components/sections/pricing";
import FaqSection from "@/components/sections/faq";
import BlogPreview from "@/components/sections/blog-preview";
import HowQuantraWorks from "@/components/sections/how-quantra-works";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <div className="relative">
        <TrustedCompanies />
      </div>
      <StatsShowcase />
      <AboutUsSection />
      <ServicesSection />
      <WhyUsSection />
      <HowItWorksSection />
      <TechStack />
      <ArchitectureShowcase />
      <CaseStudies />
      <Testimonials />
      <PricingSection />
      <FaqSection />
      <BlogPreview />
      <HowQuantraWorks />
      <FinalCta />
      <Footer />
    </main>
  );
}