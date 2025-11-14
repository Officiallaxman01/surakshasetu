"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Mail, ArrowRight, Shield, ArrowLeft, CheckCircle } from "lucide-react";
import { PlasmaBackground } from "@/components/ui/plasma-background";

const DecorativeCorners = () => (
  <>
    <div className="absolute top-4 left-4">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 1H1V40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        <path d="M15 1H1" stroke="#FF0000" strokeWidth="2" />
      </svg>
    </div>
    <div className="absolute top-4 right-4">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H39V40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        <path d="M25 1H39" stroke="#FF0000" strokeWidth="2" />
      </svg>
    </div>
  </>
);

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset request for:", email);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Plasma Background */}
      <PlasmaBackground color="#FF0000" opacity={0.12} speed={0.0008} />
      
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]" />
      </div>

      {/* Back to Home Link */}
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-text-secondary hover:text-white transition-colors z-20"
      >
        <Shield className="w-6 h-6 text-primary" />
        <span className="font-monospace text-sm uppercase">SurakshaSetu</span>
      </Link>

      {/* Forgot Password Container */}
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          {/* Card */}
          <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12">
            <DecorativeCorners />

            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary/20"
                  >
                    <Mail className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h1 className="h2 mb-2">FORGOT PASSWORD?</h1>
                  <p className="text-text-secondary text-sm">
                    Enter your email address and we&apos;ll send you instructions to reset your password
                  </p>
                </div>

                {/* Reset Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-monospace text-text-secondary mb-2 uppercase">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="w-full bg-background border border-border rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-accent-hover text-white font-monospace uppercase py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_10px_40px_rgba(255,0,0,0.3)]"
                  >
                    Send Reset Link
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Back to Login */}
                  <Link 
                    href="/auth/login"
                    className="flex items-center justify-center gap-2 text-text-secondary hover:text-white transition-colors text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Sign In
                  </Link>
                </form>
              </>
            ) : (
              <>
                {/* Success Message */}
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/20"
                  >
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <h1 className="h2 mb-4">CHECK YOUR EMAIL</h1>
                  <p className="text-text-secondary text-base leading-relaxed mb-6">
                    We&apos;ve sent password reset instructions to <span className="text-primary font-semibold">{email}</span>
                  </p>
                  <p className="text-text-secondary text-sm mb-8">
                    Didn&apos;t receive the email? Check your spam folder or{" "}
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary hover:text-accent-hover font-semibold"
                    >
                      try again
                    </button>
                  </p>
                  <Link
                    href="/auth/login"
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Sign In
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Security Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-xs text-text-muted">
              🔒 Password reset links are valid for <span className="text-primary">1 hour</span> and can only be used once
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

