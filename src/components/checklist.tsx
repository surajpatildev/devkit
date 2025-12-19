"use client";

import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CheckItemProps {
  title: string;
  description: string;
}

export function CheckItem({ title, description }: CheckItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Card
      className={cn(
        "flex gap-4 p-4 bg-card/30 border-border/50 backdrop-blur-sm cursor-pointer transition-all hover:bg-card/50 group",
        checked && "bg-primary/5 border-primary/20"
      )}
      onClick={() => setChecked(!checked)}
    >
      <div
        className={cn(
          "w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all",
          checked
            ? "border-primary bg-primary text-primary-foreground"
            : "border-muted-foreground/30 group-hover:border-primary/50"
        )}
      >
        <Check
          className={cn(
            "w-3 h-3 transition-all",
            checked ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )}
        />
      </div>
      <div>
        <strong
          className={cn(
            "block text-foreground font-medium transition-colors",
            checked && "text-primary"
          )}
        >
          {title}
        </strong>
        <span className="text-sm text-muted-foreground">{description}</span>
      </div>
    </Card>
  );
}

export function Checklist({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-2">{children}</div>;
}
