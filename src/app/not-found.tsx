import Link from "next/link";
import Header from "@/components/sections/header";
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

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center pt-[100px] pb-20">
        <section className="relative w-full py-[120px] lg:py-20 md:py-15">
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
              <p className="sub-title">/ error</p>
              <h1 className="text-[150px] lg:text-[120px] md:text-[80px] font-bold text-primary mt-4 mb-6 leading-none">404</h1>
              <h2 className="h2 mb-6">PAGE NOT FOUND</h2>
              <p className="text-text-secondary text-lg mb-12">
                The page you're looking for doesn't exist or has been moved. Let's get you back to safety.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link 
                  href="/" 
                  className="btn-text bg-primary hover:bg-accent-hover text-primary-foreground px-8 py-4 transition-colors inline-block"
                >
                  BACK TO HOME
                </Link>
                <Link 
                  href="/contact" 
                  className="btn-text border border-border hover:bg-white hover:text-black text-white px-8 py-4 transition-colors inline-block"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
