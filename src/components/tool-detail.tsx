"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Copy, Check, ExternalLink, Download, Terminal } from "lucide-react";
import { useState } from "react";
import type { GlowColor, TagType } from "@/lib/tools";

interface Tag {
  type: TagType;
  label?: string;
}

const tagStyles: Record<TagType, string> = {
  free: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  paid: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  oss: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  recommended: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  essential: "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

const glowColors: Record<GlowColor, string> = {
  green: "#10b981",
  cyan: "#22d3ee",
  purple: "#c084fc",
  yellow: "#facc15",
  pink: "#f472b6",
  orange: "#fb923c",
};

// Hero section for tool detail page
interface ToolHeroProps {
  name: string;
  description: string;
  href: string;
  tags: Tag[];
  glow?: GlowColor;
  installCommand?: string;
  downloadUrl?: string;
}

export function ToolHero({
  name,
  description,
  href,
  tags,
  glow = "green",
  installCommand,
  downloadUrl,
}: ToolHeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!installCommand) return;
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 mb-12">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {tags.map((tag, i) => (
          <Badge
            key={i}
            variant="outline"
            className={cn(
              "text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-md",
              tagStyles[tag.type]
            )}
          >
            {tag.label || tag.type.toUpperCase()}
          </Badge>
        ))}
      </div>

      <h1
        className="text-4xl md:text-5xl font-bold mb-4"
        style={{ color: glowColors[glow] }}
      >
        {name}
      </h1>

      <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-4">
        {installCommand && (
          <button
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg border transition-all",
              "bg-card/50 border-border/50 hover:border-primary/50"
            )}
          >
            <Terminal className="w-5 h-5 text-primary" />
            <code className="text-sm font-mono text-muted-foreground">
              {installCommand}
            </code>
            <div
              className={cn(
                "p-1 rounded transition-all",
                copied
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </div>
          </button>
        )}

        {downloadUrl && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary/50 transition-all text-muted-foreground hover:text-foreground"
          >
            <Download className="w-5 h-5" />
            <span className="text-sm">Download</span>
          </a>
        )}

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary/50 transition-all text-muted-foreground hover:text-foreground"
        >
          <ExternalLink className="w-5 h-5" />
          <span className="text-sm">Official Website</span>
        </a>
      </div>
    </div>
  );
}

// Section wrapper for detail page
interface DetailSectionProps {
  title: string;
  children: React.ReactNode;
}

export function DetailSection({ title, children }: DetailSectionProps) {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-foreground">{title}</h2>
      {children}
    </section>
  );
}

// Config file display
interface ConfigBlockProps {
  filename: string;
  language?: string;
  children: React.ReactNode;
}

export function ConfigBlock({
  filename,
  language = "bash",
  children,
}: ConfigBlockProps) {
  const [copied, setCopied] = useState(false);

  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (!node) return "";
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (typeof node === "object" && "props" in node) {
      const nodeWithProps = node as { props: { children: React.ReactNode } };
      return extractText(nodeWithProps.props.children);
    }
    return "";
  };

  const handleCopy = async () => {
    const text = extractText(children);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border/50">
        <code className="text-sm text-muted-foreground font-mono">
          {filename}
        </code>
        <button
          onClick={handleCopy}
          className={cn(
            "p-1.5 rounded transition-all",
            copied
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      <CardContent className="p-0">
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono leading-relaxed text-muted-foreground">
            {children}
          </code>
        </pre>
      </CardContent>
    </Card>
  );
}

// Feature list
interface FeatureListProps {
  features: string[];
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="space-y-3">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
          <span className="text-muted-foreground">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

// Keyboard shortcut display
interface ShortcutProps {
  keys: string[];
  description: string;
}

export function Shortcut({ keys, description }: ShortcutProps) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
      <span className="text-muted-foreground">{description}</span>
      <div className="flex items-center gap-1">
        {keys.map((key, i) => (
          <span key={i}>
            <kbd className="px-2 py-1 text-xs font-mono bg-muted/50 border border-border/50 rounded">
              {key}
            </kbd>
            {i < keys.length - 1 && (
              <span className="mx-1 text-muted-foreground">+</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

// Extension card for IDE pages
interface ExtensionCardProps {
  name: string;
  id: string;
  description: string;
  category?: string;
}

export function ExtensionCard({
  name,
  id,
  description,
  category,
}: ExtensionCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-medium text-foreground">{name}</h4>
            {category && (
              <span className="text-xs text-muted-foreground">{category}</span>
            )}
          </div>
          <button
            onClick={handleCopy}
            className={cn(
              "p-1.5 rounded transition-all",
              copied
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-primary"
            )}
            title="Copy extension ID"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <code className="text-xs text-primary/70 font-mono">{id}</code>
      </CardContent>
    </Card>
  );
}

// Tip/Note callout
interface TipProps {
  children: React.ReactNode;
  type?: "tip" | "warning" | "info";
}

export function Tip({ children, type = "tip" }: TipProps) {
  const styles = {
    tip: "border-emerald-500/30 bg-emerald-500/5",
    warning: "border-amber-500/30 bg-amber-500/5",
    info: "border-cyan-500/30 bg-cyan-500/5",
  };

  const labels = {
    tip: "Tip",
    warning: "Warning",
    info: "Info",
  };

  return (
    <div className={cn("p-4 rounded-lg border", styles[type])}>
      <span className="text-sm font-medium text-foreground block mb-1">
        {labels[type]}
      </span>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
