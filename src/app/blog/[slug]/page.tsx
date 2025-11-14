"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ArrowLeft, Calendar, User } from "lucide-react";

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

const blogDetails: Record<string, any> = {
  "building-cyber-resilience-in-2025": {
    slug: "building-cyber-resilience-in-2025",
    title: "Building Cyber Resilience in 2025",
    excerpt: "A comprehensive guide to creating a resilient cybersecurity posture that can withstand and recover from advanced persistent threats.",
    date: "July 5, 2025",
    author: "Dr. Sarah Chen",
    category: "Best Practices",
    readTime: "8 min read",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io/assets/images/688fa35d183ff7b96aaa7474_Blog_20Thumbnail-10.webp",
    content: `
      <h2>The Importance of Cyber Resilience</h2>
      <p>In today's digital landscape, cyber resilience has become more critical than ever. Organizations must not only defend against attacks but also ensure they can quickly recover and maintain operations during and after a security incident.</p>
      
      <h2>Key Components of Cyber Resilience</h2>
      <p>Building a resilient cybersecurity framework requires a multi-layered approach that encompasses prevention, detection, response, and recovery capabilities.</p>
      
      <h3>1. Proactive Defense Mechanisms</h3>
      <p>Implement advanced threat detection systems that use AI and machine learning to identify potential threats before they materialize into actual breaches. This includes:</p>
      <ul>
        <li>Real-time threat intelligence integration</li>
        <li>Behavioral analysis and anomaly detection</li>
        <li>Automated response protocols</li>
        <li>Regular vulnerability assessments</li>
      </ul>
      
      <h3>2. Incident Response Planning</h3>
      <p>Every organization needs a comprehensive incident response plan that defines clear procedures, roles, and communication channels for handling security incidents. Regular drills and updates ensure your team is prepared when an actual incident occurs.</p>
      
      <h3>3. Business Continuity and Disaster Recovery</h3>
      <p>Develop robust backup strategies and disaster recovery plans that ensure critical business operations can continue even during a major security incident. This includes regular testing of backup systems and recovery procedures.</p>
      
      <h2>Building a Culture of Security</h2>
      <p>Cyber resilience isn't just about technology—it's about people. Creating a security-aware culture where every employee understands their role in protecting organizational assets is crucial for long-term success.</p>
      
      <h2>Conclusion</h2>
      <p>As threats continue to evolve, organizations must shift from a purely defensive posture to one of resilience. By implementing comprehensive strategies that encompass prevention, detection, response, and recovery, businesses can protect their operations and maintain stakeholder trust even in the face of sophisticated cyber attacks.</p>
    `
  }
};

export default function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogDetails[slug] || blogDetails["building-cyber-resilience-in-2025"];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-[100px]">
        <article className="relative bg-black py-[120px] lg:py-20 md:py-15">
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
          
          <div className="container max-w-[900px]">
            <Link href="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="mb-8">
              <p className="sub-title text-sm mb-4">{post.category}</p>
              <h1 className="h2 mb-6">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-text-secondary">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-border">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-border">
              <Link 
                href="/contact" 
                className="btn-text bg-primary hover:bg-accent-hover text-primary-foreground px-8 py-4 transition-colors inline-block"
              >
                DISCUSS YOUR SECURITY NEEDS
              </Link>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}
