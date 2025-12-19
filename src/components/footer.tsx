import { Github, Twitter, Linkedin, Terminal } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/surajpatildev",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/suraj-patil-a09086176",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/surajpatildev",
    icon: Twitter,
  },
];

const sections = [
  { name: "Quick Start", href: "#quick-start" },
  { name: "Terminal", href: "#terminal" },
  { name: "AI Tools", href: "#ai" },
  { name: "Editors", href: "#editors" },
  { name: "Productivity", href: "#productivity" },
  { name: "Dev Tools", href: "#dev" },
  { name: "Notes", href: "#notes" },
  { name: "Brewfile", href: "#brewfile" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold">
                <span className="text-primary">dev</span>
                <span className="text-muted-foreground">kit</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A curated collection of tools, configurations, and workflows for
              setting up a new Mac for software development.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">
              Sections
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {sections.map((section) => (
                <li key={section.name}>
                  <a
                    href={section.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Install */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">
              Quick Install
            </h3>
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground">
                Get started with one command:
              </p>
              <div className="p-3 rounded-lg bg-card border border-border font-mono text-xs">
                <span className="text-muted-foreground">$ </span>
                <span className="text-primary">brew</span>
                <span className="text-foreground"> bundle </span>
                <span className="text-terminal-yellow">--global</span>
              </div>
              <p className="text-xs text-muted-foreground">
                After saving the Brewfile to ~/.Brewfile
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Made by{" "}
            <a
              href="https://github.com/surajpatildev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Suraj Patil
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} • Last updated December 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
