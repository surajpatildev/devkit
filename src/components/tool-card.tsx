"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";

export type GlowColor =
  | "green"
  | "cyan"
  | "purple"
  | "yellow"
  | "pink"
  | "orange";

export type TagType = "free" | "paid" | "oss" | "recommended" | "essential";

interface Tag {
  type: TagType;
  label?: string;
}

interface ToolCardProps {
  name: string;
  href: string;
  description: string;
  installCommand: string;
  tags: Tag[];
  glow?: GlowColor;
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

export function ToolCard({
  name,
  href,
  description,
  installCommand,
  tags,
  glow = "green",
}: ToolCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 group border-border/50 bg-card/50 backdrop-blur-sm",
        `glow-${glow}`,
        "glow-card"
      )}
      style={
        {
          "--glow-color": glowColors[glow],
        } as React.CSSProperties
      }
    >
      <CardContent className="p-5">
        <div className="flex justify-between items-start gap-3 mb-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group/link"
          >
            <h3 className="font-semibold">{name}</h3>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
          </a>
          <div className="flex gap-1.5 flex-wrap justify-end shrink-0">
            {tags.map((tag, i) => (
              <Badge
                key={i}
                variant="outline"
                className={cn(
                  "text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-md",
                  tagStyles[tag.type]
                )}
              >
                {tag.label ||
                  (tag.type === "recommended"
                    ? "Rec"
                    : tag.type === "essential"
                    ? "Essential"
                    : tag.type.toUpperCase())}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div
          className="flex items-center gap-2 bg-background/50 border border-border/50 rounded-lg px-3 py-2 cursor-pointer hover:border-primary/50 transition-colors"
          onClick={handleCopy}
        >
          <code className="text-xs text-muted-foreground flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-mono">
            <span className="text-primary/60">$</span> {installCommand}
          </code>
          <div
            className={cn(
              "p-1.5 rounded-md transition-all shrink-0",
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
        </div>
      </CardContent>
    </Card>
  );
}

export function ToolGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  );
}
