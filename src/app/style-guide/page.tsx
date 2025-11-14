import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Check } from "lucide-react";

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

export default function StyleGuidePage() {
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
          
          <div className="container max-w-[1200px]">
            <div className="text-center mb-16">
              <p className="sub-title">/ design system</p>
              <h1 className="h1 mt-4 mb-6">STYLE GUIDE</h1>
              <p className="text-text-secondary text-lg max-w-[700px] mx-auto">
                The SurakshaSetu design system showcases our typography, colors, components, and visual elements.
              </p>
            </div>

            {/* Typography */}
            <div className="mb-20">
              <h2 className="h2 mb-8">Typography</h2>
              <div className="space-y-8">
                <div>
                  <h1 className="h1 mb-2">Heading 1 - 80px</h1>
                  <p className="text-text-muted">Font: Space Grotesk Bold, Uppercase</p>
                </div>
                <div>
                  <h2 className="h2 mb-2">Heading 2 - 56px</h2>
                  <p className="text-text-muted">Font: Space Grotesk Bold, Uppercase</p>
                </div>
                <div>
                  <h3 className="h3 mb-2">Heading 3 - 32px</h3>
                  <p className="text-text-muted">Font: Space Grotesk Bold, Uppercase</p>
                </div>
                <div>
                  <h4 className="h4 mb-2">Heading 4 - 24px</h4>
                  <p className="text-text-muted">Font: Space Grotesk Semibold</p>
                </div>
                <div>
                  <h5 className="h5 mb-2">Heading 5 - 18px</h5>
                  <p className="text-text-muted">Font: Space Grotesk Semibold</p>
                </div>
                <div>
                  <p className="mb-2">Paragraph - 16px Regular</p>
                  <p className="text-text-muted">This is body text used throughout the site for descriptions and content.</p>
                </div>
                <div>
                  <p className="sub-title">/ Sub-title - 14px</p>
                  <p className="text-text-muted">Font: Space Grotesk Medium, Uppercase, Red</p>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-20">
              <h2 className="h2 mb-8">Colors</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="w-full h-24 bg-primary rounded-lg mb-3"></div>
                  <p className="font-medium text-white">Primary</p>
                  <p className="text-sm text-text-muted">#FF0000</p>
                </div>
                <div>
                  <div className="w-full h-24 bg-background rounded-lg border border-border mb-3"></div>
                  <p className="font-medium text-white">Background</p>
                  <p className="text-sm text-text-muted">#000000</p>
                </div>
                <div>
                  <div className="w-full h-24 bg-secondary rounded-lg mb-3"></div>
                  <p className="font-medium text-white">Secondary</p>
                  <p className="text-sm text-text-muted">#0D0D0D</p>
                </div>
                <div>
                  <div className="w-full h-24 bg-card rounded-lg border border-border mb-3"></div>
                  <p className="font-medium text-white">Card</p>
                  <p className="text-sm text-text-muted">rgba(13,13,13,0.8)</p>
                </div>
                <div>
                  <div className="w-full h-24 bg-white rounded-lg mb-3"></div>
                  <p className="font-medium text-white">Text Primary</p>
                  <p className="text-sm text-text-muted">#FFFFFF</p>
                </div>
                <div>
                  <div className="w-full h-24 rounded-lg border border-border mb-3 flex items-center justify-center">
                    <span className="text-text-secondary">70%</span>
                  </div>
                  <p className="font-medium text-white">Text Secondary</p>
                  <p className="text-sm text-text-muted">rgba(255,255,255,0.7)</p>
                </div>
                <div>
                  <div className="w-full h-24 rounded-lg border border-border mb-3 flex items-center justify-center">
                    <span className="text-text-muted">50%</span>
                  </div>
                  <p className="font-medium text-white">Text Muted</p>
                  <p className="text-sm text-text-muted">rgba(255,255,255,0.5)</p>
                </div>
                <div>
                  <div className="w-full h-24 rounded-lg border border-border mb-3"></div>
                  <p className="font-medium text-white">Border</p>
                  <p className="text-sm text-text-muted">rgba(255,255,255,0.1)</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mb-20">
              <h2 className="h2 mb-8">Buttons</h2>
              <div className="flex flex-wrap gap-4">
                <button className="btn-text bg-primary hover:bg-accent-hover text-primary-foreground px-8 py-4 transition-colors">
                  PRIMARY BUTTON
                </button>
                <button className="btn-text border border-border hover:bg-white hover:text-black text-white px-8 py-4 transition-colors">
                  SECONDARY BUTTON
                </button>
                <button className="btn-text bg-white hover:bg-gray-200 text-black px-8 py-4 transition-colors">
                  LIGHT BUTTON
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="mb-20">
              <h2 className="h2 mb-8">Cards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="h4 mb-3">Service Card</h3>
                  <p className="text-text-secondary">
                    Example of a service or feature card with icon, title, and description.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(255,0,0,0.15)]">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="h4 mb-3">Hover Card</h3>
                  <p className="text-text-secondary">
                    Hover over this card to see the elevation and shadow effect.
                  </p>
                </div>

                <div className="bg-secondary border border-border rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="h4 mb-3">Secondary Card</h3>
                  <p className="text-text-secondary">
                    Card with secondary background color for visual hierarchy.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="mb-20">
              <h2 className="h2 mb-8">Decorative Elements</h2>
              <div className="relative bg-card border border-border rounded-2xl p-12 min-h-[300px]">
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
                <div className="text-center">
                  <h3 className="h3 mb-4">Corner Brackets</h3>
                  <p className="text-text-secondary max-w-[600px] mx-auto">
                    Decorative corner bracket elements are used throughout the site to create a technical, blueprint-like aesthetic that reinforces the cybersecurity theme.
                  </p>
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
