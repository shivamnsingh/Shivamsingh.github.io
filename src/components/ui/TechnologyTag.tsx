"use client";

import { cn } from "@/lib/utils";

interface TechnologyTagProps {
  name: string;
  className?: string;
}

export function TechnologyTag({ name, className }: TechnologyTagProps) {
  return (
    <div
      className={cn(
        "relative max-w-fit inline-flex items-center justify-between box-border px-1 h-6 text-small rounded-full bg-default text-default-foreground",
        className
      )}
    >
      <span className="flex-1 text-inherit font-normal px-1">
        <span className="flex items-center gap-2">{name}</span>
      </span>
    </div>
  );
}

interface TechnologyTagsProps {
  technologies: string[];
  className?: string;
}

export function TechnologyTags({ technologies, className }: TechnologyTagsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {technologies.map((tech) => (
        <TechnologyTag key={tech} name={tech} />
      ))}
    </div>
  );
}
