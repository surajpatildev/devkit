import { Badge } from "@/components/ui/badge";
import { Github, Terminal, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <header className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating terminal decoration */}
      <div className="absolute top-40 right-10 opacity-20 hidden lg:block animate-float">
        <div className="w-64 h-40 rounded-lg border border-primary/30 bg-card/50 backdrop-blur p-4">
          <div className="flex gap-1.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="space-y-2 text-xs font-mono">
            <p className="text-muted-foreground">$ brew bundle</p>
            <p className="text-primary">Installing dependencies...</p>
            <p className="text-muted-foreground">✓ 50+ tools ready</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Version badge */}
        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs font-medium border-primary/30 bg-primary/5 text-primary"
          >
            <Sparkles className="w-3 h-3 mr-1.5" />
            2025 Edition
          </Badge>
          <Badge
            variant="outline"
            className="px-3 py-1 text-xs font-medium border-border bg-card/50"
          >
            macOS Sequoia
          </Badge>
        </div>

        {/* Main title */}
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in animation-delay-100">
          <span className="text-foreground">Mac Developer</span>
          <br />
          <span className="text-gradient">Setup Guide</span>
        </h1>

        {/* Terminal prompt style subtitle */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in animation-delay-200">
          <Terminal className="w-5 h-5 text-primary" />
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            <span className="text-primary">~</span> A curated collection of
            tools for the modern developer
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 animate-fade-in animation-delay-300">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary status-dot" />
            <span className="text-sm text-muted-foreground">
              Last updated <span className="text-foreground">Dec 2025</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">50+</span>
            <span className="text-sm text-muted-foreground">curated tools</span>
          </div>
          <a
            href="https://github.com/surajpatildev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Github className="w-4 h-4" />
            <span>by </span>
            <span className="text-foreground group-hover:text-primary transition-colors">
              @surajpatildev
            </span>
          </a>
        </div>

        {/* Quick action hint */}
        <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur text-sm animate-fade-in animation-delay-500">
          <kbd className="px-2 py-0.5 rounded bg-muted text-xs font-mono">
            ⌘
          </kbd>
          <span className="text-muted-foreground">+</span>
          <kbd className="px-2 py-0.5 rounded bg-muted text-xs font-mono">K</kbd>
          <span className="text-muted-foreground ml-2">
            Quick copy any command
          </span>
        </div>
      </div>
    </header>
  );
}
