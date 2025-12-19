import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  number,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 border-b border-border/50 last:border-b-0", className)}
    >
      <div className="flex items-center gap-4 mb-2">
        <span className="text-xs font-mono font-medium text-primary bg-primary/10 px-2 py-1 rounded">
          {number}
        </span>
        <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-muted-foreground mb-10 max-w-2xl ml-14">{description}</p>
      )}
      <div className={description ? "" : "mt-8"}>{children}</div>
    </section>
  );
}

export function SubSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-12 first:mt-0">
      <h3 className="text-sm font-medium text-muted-foreground mb-5 flex items-center gap-2">
        <span className="w-8 h-px bg-border" />
        {title}
      </h3>
      {children}
    </div>
  );
}
