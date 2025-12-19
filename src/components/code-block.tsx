"use client";

import { cn } from "@/lib/utils";
import { Copy, Check, Terminal } from "lucide-react";
import { useState, ReactNode, isValidElement } from "react";

interface CodeBlockProps {
  language?: string;
  children: ReactNode;
  filename?: string;
  showLineNumbers?: boolean;
}

const getPlainText = (node: ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getPlainText).join("");
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return getPlainText(props.children);
  }
  return "";
};

export function CodeBlock({
  language = "bash",
  children,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = getPlainText(children);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden group">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-card/50">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={cn(
            "p-1.5 rounded-md transition-all",
            copied
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-primary hover:bg-primary/10 opacity-0 group-hover:opacity-100"
          )}
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
      <pre
        className={cn(
          "p-5 overflow-x-auto text-sm leading-relaxed font-mono",
          showLineNumbers && "pl-12"
        )}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}

// Syntax highlighting components
export function Comment({ children }: { children: ReactNode }) {
  return <span className="text-zinc-500">{children}</span>;
}

export function Cmd({ children }: { children: ReactNode }) {
  return <span className="text-cyan-400">{children}</span>;
}

export function Str({ children }: { children: ReactNode }) {
  return <span className="text-emerald-400">{children}</span>;
}

export function Flag({ children }: { children: ReactNode }) {
  return <span className="text-amber-400">{children}</span>;
}

// Terminal window component
interface TerminalWindowProps {
  filename?: string;
  children: ReactNode;
}

export function TerminalWindow({ filename, children }: TerminalWindowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = getPlainText(children);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl border border-border/50 overflow-hidden bg-card/30 backdrop-blur-sm group">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-card/50">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
          </div>
          {filename && (
            <span className="text-xs text-muted-foreground font-mono">
              {filename}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className={cn(
            "p-1.5 rounded-md transition-all",
            copied
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-primary hover:bg-primary/10 opacity-0 group-hover:opacity-100"
          )}
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-sm leading-relaxed max-h-[500px] overflow-y-auto font-mono">
        <code>{children}</code>
      </pre>
    </div>
  );
}
