"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ShoppingCart, Check, ArrowLeft } from "lucide-react";
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

const productDetails: Record<string, any> = {
  "surakshasetu-forge": {
    id: "surakshasetu-forge",
    name: "SurakshaSetu Forge",
    category: "Security Hardware",
    price: 2499,
    image: getSupabaseImageUrl(IMAGE_PATHS.securityShield),
    description: "The SurakshaSetu Forge is our flagship security appliance, featuring AI-powered threat detection and real-time response capabilities. Built for enterprise environments that demand the highest level of protection.",
    features: [
      "AI-Powered Threat Detection",
      "Real-time Response System",
      "99.99% Uptime Guarantee",
      "24/7 Monitoring Dashboard",
      "Automated Patch Management",
      "Zero-Day Vulnerability Protection",
      "Multi-Layer Encryption",
      "Advanced Analytics & Reporting"
    ],
    specs: {
      "Processor": "Quad-Core ARM Cortex-A72",
      "Memory": "16GB DDR4",
      "Storage": "512GB NVMe SSD",
      "Network": "Dual 10GbE Ports",
      "Dimensions": "442 x 400 x 44mm (1U)",
      "Power": "100-240V AC, 50/60Hz"
    }
  }
};

export default function ShopDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = productDetails[id] || productDetails["surakshasetu-forge"];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-[100px]">
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
            <Link href="/shop" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Shop
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Product Image */}
              <div className="relative aspect-square bg-secondary rounded-2xl overflow-hidden border border-border">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div>
                <p className="sub-title text-sm mb-3">{product.category}</p>
                <h1 className="h2 mb-4">{product.name}</h1>
                <p className="text-text-secondary text-lg mb-6">{product.description}</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">${product.price}</span>
                  <span className="text-text-secondary ml-2">one-time payment</span>
                </div>

                <button className="btn-text bg-primary hover:bg-accent-hover text-primary-foreground px-8 py-4 transition-colors w-full md:w-auto flex items-center justify-center gap-3 mb-12">
                  <ShoppingCart className="w-5 h-5" />
                  ADD TO CART
                </button>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="h4 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                        </div>
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div>
                  <h3 className="h4 mb-4">Technical Specifications</h3>
                  <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                        <span className="text-text-secondary">{key}</span>
                        <span className="text-white font-medium">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
