import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    date: 'January 15, 2025',
    title: 'How AI Detects Phishing Emails in Real-Time',
    excerpt: 'Deep dive into SurakshaSetu\'s NLP and deep learning models that analyze email content, headers, and behavioral patterns to detect phishing attempts with 95%+ accuracy in under 100ms.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/68908e572d562bce77bd7548_Blog_20Thumbnail-11.webp',
    imageAlt: 'AI-powered email fraud detection system analyzing phishing attempts.',
    href: '/blog/how-ai-detects-phishing-emails-in-real-time',
  },
  {
    date: 'January 12, 2025',
    title: 'Blockchain Forensics: Legal Evidence for Cybercrime',
    excerpt: 'How SurakshaSetu\'s immutable blockchain logging creates tamper-proof forensic packages that have been successfully used in legal proceedings and CERT-In cybercrime investigations.',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/688fa35d183ff7b96aaa7474_Blog_20Thumbnail-10.webp',
    imageAlt: 'Blockchain-based digital forensics and evidence collection system.',
    href: '/blog/blockchain-forensics-legal-evidence-cybercrime',
  },
];

const DecorativeCorner = ({ position }: { position: string }) => {
  let classes = 'absolute w-10 h-10 text-white/20';
  let transform = '';
  switch (position) {
    case 'top-left':
      classes += ' top-0 left-0';
      break;
    case 'top-right':
      classes += ' top-0 right-0';
      transform = 'scaleX(-1)';
      break;
    case 'bottom-left':
      classes += ' bottom-0 left-0';
      transform = 'scaleY(-1)';
      break;
    case 'bottom-right':
      classes += ' bottom-0 right-0';
      transform = 'scale(-1, -1)';
      break;
  }
  return (
    <svg className={classes} style={{ transform }} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 1H1V40" stroke="currentColor" />
    </svg>
  );
};

const BlogPreview = () => {
  return (
    <section className="bg-black py-[120px] font-primary">
      <div className="container max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="relative border border-border bg-secondary-background rounded-2xl p-10 sm:p-12 md:p-16 lg:p-20">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_0%,rgba(255,0,0,0.15),transparent)]"></div>
          <DecorativeCorner position="top-left" />
          <DecorativeCorner position="top-right" />
          <DecorativeCorner position="bottom-left" />
          <DecorativeCorner position="bottom-right" />
          
          <div className="relative text-center">
            <p className="sub-title text-primary uppercase text-sm font-medium tracking-[0.1em] mb-4">/ blog</p>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="h2 text-[3.5rem] font-bold leading-[1.2] uppercase text-white tracking-[-0.01em] text-center md:text-left">
                Insights That Keep You Ahead
              </h2>
              <Link href="/blog" className="hidden md:flex items-center gap-2 btn-text text-white font-semibold text-sm uppercase tracking-wider whitespace-nowrap hover:text-primary transition-colors duration-300">
                <span>SEE ALL BLOGS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="max-w-[700px] mx-auto text-text-secondary leading-[1.6]">
              Explore expert insights on AI-powered fraud detection, blockchain forensics, multi-layer security architecture, and the latest trends in cybersecurity. Learn how SurakshaSetu's advanced ML models and real-time threat intelligence protect users from evolving cyber threats.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16">
            {blogPosts.map((post) => (
              <Link href={post.href} key={post.title} className="group flex flex-col bg-white/[0.05] border border-border rounded-2xl p-6 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>
                  <Image
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    width={546}
                    height={307}
                    className="w-full h-auto object-cover transition-transform duration-400 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <p className="font-monospace text-xs font-medium uppercase tracking-[0.1em] text-primary mb-3">{post.date}</p>
                  <h3 className="h4 text-2xl font-semibold leading-[1.4] text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-[1.5] flex-grow">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="flex items-center justify-center gap-2 btn-text text-white font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors duration-300">
              <span>SEE ALL BLOGS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogPreview;