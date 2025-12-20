"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Terminal, Github } from "lucide-react";

const navItems = [
  { href: "#quick-start", label: "Start" },
  { href: "#shell", label: "Shell" },
  { href: "#terminal", label: "Terminal" },
  { href: "#ide", label: "IDEs" },
  { href: "#browsers", label: "Browsers" },
  { href: "#ai", label: "AI" },
  { href: "#productivity", label: "Productivity" },
  { href: "#dev", label: "Dev" },
  { href: "#notes", label: "Notes" },
  { href: "#brewfile", label: "Brewfile" },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className="flex items-center gap-2.5 text-foreground font-bold text-base shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Terminal className="w-4 h-4 text-primary" />
          </div>
          <span className="hidden sm:inline">
            <span className="text-primary">dev</span>
            <span className="text-muted-foreground">kit</span>
          </span>
        </a>

        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide mx-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-1.5 text-sm rounded-lg transition-all whitespace-nowrap relative",
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeSection === item.href.slice(1) && (
                <span className="absolute inset-0 bg-primary/10 rounded-lg" />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </div>

        <a
          href="https://github.com/surajpatildev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-all shrink-0"
        >
          <Github className="w-4 h-4" />
          <span className="hidden md:inline">GitHub</span>
        </a>
      </div>
    </nav>
  );
}
