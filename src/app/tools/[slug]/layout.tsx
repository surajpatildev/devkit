"use client";

import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import { useEffect } from "react";

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Scroll to top on mount without animation
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen noise-overlay">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-16">
          <Link
            href="/"
            scroll={false}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to DevKit</span>
          </Link>

          <Link
            href="/"
            scroll={false}
            className="flex items-center gap-2.5 text-foreground font-bold text-base"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <span>
              <span className="text-primary">dev</span>
              <span className="text-muted-foreground">kit</span>
            </span>
          </Link>
        </div>
      </nav>
      <main className="pt-24 pb-16">{children}</main>
    </div>
  );
}
