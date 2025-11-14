"use client";

import React from "react";

export function FloatingCredit() {
  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl opacity-75 transition-opacity duration-300" aria-hidden="true"></div>
        <div className="relative px-6 py-3 bg-gradient-to-r from-background/95 to-background/90 backdrop-blur-md border border-primary/30 rounded-full shadow-2xl pointer-events-none">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="font-monospace text-sm text-white tracking-wider font-medium">
              Created by <span className="text-primary font-bold">Chandan pandey</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

