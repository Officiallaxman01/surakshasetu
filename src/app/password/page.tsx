"use client";

import { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Lock, Eye, EyeOff } from "lucide-react";

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

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Example password check (in production, this would be handled securely on the server)
    if (password === "surakshasetu2025") {
      // Redirect to protected content
      window.location.href = "/";
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

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
          
          <div className="container max-w-[500px]">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <p className="sub-title">/ protected access</p>
                <h1 className="h2 mt-4 mb-4">PASSWORD REQUIRED</h1>
                <p className="text-text-secondary">
                  This page is password protected. Please enter the password to continue.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                      }}
                      className="w-full bg-background border border-border rounded-lg pl-4 pr-12 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Enter password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-white transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {error && (
                    <p className="mt-2 text-sm text-red-500">{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-text bg-primary hover:bg-accent-hover text-primary-foreground px-8 py-4 transition-colors w-full"
                >
                  SUBMIT
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-text-muted text-sm">
                  Forgot your password?{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    Contact Support
                  </a>
                </p>
                <p className="text-text-muted text-xs mt-3">
                  Demo password: quantra2025
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
