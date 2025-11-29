"use client";

import { cn } from "@/lib/utils";

interface ContentCardProps {
  className?: string;
  children: React.ReactNode;
  centered?: boolean;
  gap?: number;
}

export function ContentCard({
  className,
  children,
  centered = false,
  gap = 2,
}: ContentCardProps) {
  return (
    <div
      className={cn(
        "relative w-full p-5 flex-auto flex-col place-content-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased",
        centered && "flex justify-center items-center",
        `gap-${gap}`,
        className
      )}
    >
      {children}
    </div>
  );
}
