import Link from 'next/link';
import React from 'react';

const SurakshaSetuLogo = () => (
  <svg width="134" height="40" viewBox="0 0 134 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SurakshaSetu Logo">
    <g className="text-primary">
      <path d="M20.25 0L0 10.125V29.875L20.25 40L40.5 29.875V10.125L20.25 0ZM34.5938 27.0156L20.25 35.1562L5.90625 27.0156V12.7344L20.25 4.59375L34.5938 12.7344V27.0156Z" fill="currentColor"/>
      <path d="M16.5938 11.25L10.5938 14.5312V25L16.5938 28.2812V11.25Z" fill="currentColor"/>
      <path d="M23.9062 11.25V28.2812L29.9062 25V14.5312L23.9062 11.25Z" fill="currentColor"/>
      <path d="M20.25 7.125L13.875 10.6875L20.25 14.25L26.625 10.6875L20.25 7.125Z" fill="currentColor"/>
      <path d="M20.25 25.3125L13.875 28.875L20.25 32.4375L26.625 28.875L20.25 25.3125Z" fill="currentColor"/>
    </g>
    <path d="M57.6534 27.5312V12.1875H62.9034V24.5312C62.9034 25.5938 63.2942 26.4375 64.0754 27.0625C64.8566 27.6875 65.8034 28 66.9149 28C68.0263 28 68.9731 27.6875 69.7542 27.0625C70.5354 26.4375 70.926 25.5938 70.926 24.5312V12.1875H76.176V24.8438C76.176 26.4531 75.6977 27.75 74.7414 28.7344C73.7851 29.7188 72.4827 30.2188 70.8342 30.2188H68.0163L67.731 28.3125H67.5938C66.8125 29.5781 65.6534 30.2188 64.1149 30.2188C62.231 30.2188 60.7592 29.6406 59.6977 28.4844C58.6363 27.3281 58.0875 25.8281 57.9731 23.9844H57.6534L57.6534 27.5312Z M88.4552 12.1875L84.2833 24.5938H83.9981L79.8263 12.1875H73.8616V30H78.8927V16.8125H79.1772L82.7481 25.9375H85.566L89.1369 16.8125H89.4213V30H94.4523V12.1875H88.4552Z M105.772 30.2188C103.888 30.2188 102.392 29.6406 101.283 28.4844C100.175 27.3281 99.6208 25.8281 99.5065 23.9844H99.1869L99.1869 27.5312H93.9369V12.1875H99.1869V20.1562H99.5065C100.187 18.2344 101.488 17.2812 103.411 17.2812C104.949 17.2812 106.208 17.75 107.187 18.6875C108.165 19.625 108.654 20.875 108.654 22.4375C108.654 24 108.165 25.2656 107.187 26.2344C106.208 27.2031 104.949 27.6875 103.731 27.6875H102.638C102.388 28.4844 102.506 29.0781 102.995 29.4688C103.483 29.8594 104.295 30.0625 105.426 30.0625C106.019 30.0625 106.561 30 107.05 29.875C107.539 29.75 107.988 29.5625 108.397 29.3125V33.1562C107.826 33.4375 107.199 33.625 106.519 33.7188C105.838 33.8125 105.158 33.875 104.477 33.875C102.133 33.875 100.32 33.1562 99.0388 31.7188C97.7575 30.2812 97.1169 28.4062 97.1169 26.0938C97.1169 23.6406 97.7888 21.6875 99.1325 20.2344C100.476 18.7812 102.261 18.0625 104.488 18.0625C106.026 18.0625 107.276 18.4688 108.238 19.2812C109.201 20.0938 109.683 21.1719 109.683 22.5156C109.683 23.1094 109.588 23.6406 109.397 24.1094C109.206 24.5781 108.938 25 108.592 25.375C108.247 25.75 107.826 26.0625 107.329 26.3125C106.833 26.5625 106.261 26.6875 105.614 26.6875H103.731C102.838 26.6875 102.133 26.4375 101.617 25.9375C101.101 25.4375 100.842 24.7188 100.842 23.7812C100.842 22.8438 101.101 22.125 101.617 21.625C102.133 21.125 102.838 20.875 103.731 20.875C104.569 20.875 105.288 21.0938 105.888 21.5312C106.488 21.9688 106.788 22.5625 106.788 23.3125V12.1875C106.788 10.6094 106.319 9.35938 105.383 8.4375C104.447 7.51562 103.119 7.0625 101.402 7.0625C99.8638 7.0625 98.6138 7.46875 97.6515 8.28125C96.6892 9.09375 96.2078 10.2031 96.2078 11.6094L101.458 12.0625C101.458 11.3906 101.542 10.8906 101.71 10.5625C101.879 10.2344 102.114 10 102.417 9.875C102.721 9.75 103.059 9.6875 103.433 9.6875C103.949 9.6875 104.388 9.875 104.752 10.2656C105.116 10.6562 105.3 11.2344 105.3 12L105.772 30.2188Z M116.784 30H111.456V12.1875H116.784V16.3125H124.634V12.1875H129.962V30H124.634V20.125H116.784V30Z" fill="white"/>
  </svg>
);

const DecorativeCorner = ({ position }: { position: string }) => {
  const positionClasses: { [key: string]: string } = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 transform scale-x-[-1]',
    'bottom-left': 'bottom-0 left-0 transform scale-y-[-1]',
    'bottom-right': 'bottom-0 right-0 transform scale-x-[-1] scale-y-[-1]',
  };
  return (
    <div className={`absolute w-10 h-10 ${positionClasses[position]} text-white/20 pointer-events-none`} aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 1H1V40" stroke="currentColor" strokeWidth="1"/>
      </svg>
    </div>
  );
};

const pageLinks = [
  { name: 'HOME', href: '/', isCurrent: true, uppercase: true },
  { name: 'About', href: '/about' },
  { name: 'Our Service', href: '/services' },
  { name: 'Shop', href: '/shop' },
  { name: 'FAQ', href: '/faq', uppercase: true },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Style Guide', href: '/style-guide' },
  { name: 'Changelog', href: '/changelog' },
];

const legalLinks = [
  { name: 'License Agreement', href: '/legal/license' },
  { name: 'Privacy Policy', href: '/legal/privacy' },
  { name: 'Terms of Service', href: '/legal/terms' },
  { name: 'Cookie Policy', href: '/legal/cookies' },
];

const accountLinks = [
  { name: 'Sign In', href: '/auth/login' },
  { name: 'Create Account', href: '/auth/signup' },
  { name: 'Forgot Password', href: '/auth/forgot-password' },
];

const socialLinks = [
  { name: 'FACEBOOK', href: '#' },
  { name: 'X TWITTER', href: '#' },
  { name: 'INSTAGRAM', href: '#' },
  { name: 'LINKEDIN', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-background text-text-secondary pt-20 pb-10">
      <div className="container relative">
        <DecorativeCorner position="top-left" />
        <DecorativeCorner position="top-right" />
        <DecorativeCorner position="bottom-left" />
        <DecorativeCorner position="bottom-right" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1fr,1fr] gap-12 lg:gap-8 mb-20">
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="Go to homepage">
              <SurakshaSetuLogo />
            </Link>
            <p className="max-w-[300px] text-text-secondary font-monospace text-base leading-relaxed">
              AI-Powered Fraud Detection & Cybersecurity Platform. Protecting digital futures with 95%+ accuracy.
            </p>
          </div>

          <div>
            <h3 className="font-monospace text-sm uppercase text-white tracking-[0.1em] mb-6">PAGES</h3>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={`font-monospace text-sm transition-colors duration-300 ${link.isCurrent ? "text-primary " : "text-text-secondary hover:text-primary "}${link.uppercase ? "uppercase" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-monospace text-sm uppercase text-white tracking-[0.1em] mb-6">LEGAL</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="font-monospace text-sm text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-monospace text-sm uppercase text-white tracking-[0.1em] mb-6">ACCOUNT</h3>
            <ul className="space-y-3">
              {accountLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="font-monospace text-sm text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h3 className="font-monospace text-sm uppercase text-white tracking-[0.1em] mb-4">SOCIAL</h3>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="font-monospace text-sm uppercase text-text-secondary hover:text-primary transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-monospace text-sm uppercase text-white tracking-[0.1em] mb-6">CONTACT</h3>
            <div className="flex flex-col gap-3 font-monospace text-sm text-text-secondary">
              <p>EMAIL: <a href="mailto:support@surakshasetu.com" className="hover:text-primary transition-colors duration-300">SUPPORT@SURAKSHASETU.COM</a></p>
              <p>LEGAL: <a href="mailto:legal@surakshasetu.com" className="hover:text-primary transition-colors duration-300">LEGAL@SURAKSHASETU.COM</a></p>
              <p>PHONE: <a href="tel:+918012345678" className="hover:text-primary transition-colors duration-300">+91 80 1234 5678</a></p>
              <p className="mt-4">ADDRESS:<br/>BANGALORE, KARNATAKA<br/>INDIA</p>
            </div>
          </div>
        </div>
        
        <div className="relative border-t border-border pt-10">
          <DecorativeCorner position="top-left" />
          <DecorativeCorner position="top-right" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left font-monospace text-sm text-text-muted">
              © 2025 SURAKSHASETU CYBERSECURITY PVT. LTD. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-4 font-monospace text-sm text-text-muted">
              <Link href="/legal/license" className="hover:text-primary transition-colors">LICENSE</Link>
              <span>•</span>
              <Link href="/legal/privacy" className="hover:text-primary transition-colors">PRIVACY</Link>
              <span>•</span>
              <Link href="/legal/terms" className="hover:text-primary transition-colors">TERMS</Link>
              <span>•</span>
              <Link href="/legal/cookies" className="hover:text-primary transition-colors">COOKIES</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}