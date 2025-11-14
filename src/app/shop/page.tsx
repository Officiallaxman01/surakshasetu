"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/sections/header";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";
import { ShoppingCart } from "lucide-react";
import { getSupabaseImageUrl, IMAGE_PATHS } from "@/lib/constants";

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

const products = [
  {
    id: "surakshasetu-forge",
    name: "SurakshaSetu Forge",
    category: "Security Hardware",
    price: 2499,
    image: getSupabaseImageUrl(IMAGE_PATHS.securityShield),
    description: "Advanced security appliance with AI-powered threat detection"
  },
  {
    id: "surakshasetu-sentinel",
    name: "SurakshaSetu Sentinel",
    category: "Monitoring Software",
    price: 599,
    image: getSupabaseImageUrl(IMAGE_PATHS.alarmClock),
    description: "Real-time threat monitoring and alert system"
  },
  {
    id: "surakshasetu-vault",
    name: "SurakshaSetu Vault",
    category: "Data Protection",
    price: 1299,
    image: getSupabaseImageUrl(IMAGE_PATHS.trophyAward),
    description: "Enterprise-grade encrypted storage solution"
  },
  {
    id: "surakshasetu-firewall-pro",
    name: "SurakshaSetu Firewall Pro",
    category: "Network Security",
    price: 899,
    image: getSupabaseImageUrl(IMAGE_PATHS.securityShield),
    description: "Next-generation firewall with deep packet inspection"
  },
  {
    id: "surakshasetu-endpoint-defense",
    name: "SurakshaSetu Endpoint Defense",
    category: "Endpoint Security",
    price: 399,
    image: getSupabaseImageUrl(IMAGE_PATHS.alarmClock),
    description: "Complete endpoint protection for all devices"
  },
  {
    id: "surakshasetu-cloud-shield",
    name: "SurakshaSetu Cloud Shield",
    category: "Cloud Security",
    price: 1799,
    image: getSupabaseImageUrl(IMAGE_PATHS.trophyAward),
    description: "Comprehensive cloud infrastructure protection"
  }
];

export default function ShopPage() {
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
              <p className="sub-title">/ shop</p>
              <h1 className="h1 mt-4 mb-6">SECURITY PRODUCTS</h1>
              <p className="text-text-secondary text-lg">
                Explore our range of cutting-edge cybersecurity products designed to protect your digital infrastructure at every level.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="relative bg-black py-[120px] lg:py-20 md:py-15">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link 
                  key={product.id} 
                  href={`/shop/${product.id}`}
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(255,0,0,0.15)]"
                >
                  <div className="relative aspect-square bg-secondary overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="sub-title text-xs mb-2">{product.category}</p>
                    <h3 className="h4 mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">${product.price}</span>
                      <button className="bg-primary hover:bg-accent-hover text-white p-3 rounded-lg transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </div>
      <Footer />
    </main>
  );
}
