"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const SurakshaSetuLogo = () => (
  <Link href="/" aria-label="Brand Logo Link" className="flex items-center gap-3 py-4">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="var(--color-primary)" />
      <path d="M20 21.6L12.8 20L20 18.4L27.2 20L20 21.6Z" fill="white" />
    </svg>
    <span className="text-white font-monospace text-2xl font-bold tracking-widest hidden sm:inline">
      SURAKSHASETU
    </span>
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
        document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/shop", label: "Products" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-colors duration-300 pt-5 pb-2`}>
      <div className="max-w-[1440px] mx-auto px-5">
        <div className={`flex items-center justify-between transition-all duration-300 rounded-none px-2.5 ${isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-[#262626]/40'}`}>
          <SurakshaSetuLogo />

          <nav className="hidden lg:flex items-center gap-8 ml-auto mr-8 h-[72px]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-monospace text-base uppercase text-white hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/contact" className="btn-text bg-primary hover:bg-accent-hover text-primary-foreground px-8 py-4 transition-colors">GET FREE SECURITY AUDIT</Link>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 z-20">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[100px] bg-black/80 backdrop-blur-lg z-10 p-5 overflow-y-auto" onClick={() => setIsOpen(false)}>
          <nav className="flex flex-col gap-6 text-center" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="font-monospace text-lg uppercase text-white hover:text-primary transition-colors">{link.label}</Link>
            ))}
            <div className="border-t border-border my-4"></div>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-text bg-primary hover:bg-accent-hover text-primary-foreground px-6 py-4 transition-colors w-full">GET FREE SECURITY AUDIT</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;