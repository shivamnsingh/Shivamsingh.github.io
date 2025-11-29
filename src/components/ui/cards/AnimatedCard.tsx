"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  externalLink?: boolean;
  animationDelay?: number;
  fullHeight?: boolean;
}

export function AnimatedCard({
  className,
  children,
  href,
  externalLink = false,
  animationDelay = 0,
  fullHeight = false,
}: AnimatedCardProps) {
  const cardContent = (
    <Card
      className={cn(
        "flex flex-col relative overflow-hidden text-foreground mobile-animation",
        fullHeight ? "h-full" : "height-auto",
        className
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {children}
    </Card>
  );

  if (href) {
    const linkProps = externalLink
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <Link
        href={href}
        {...linkProps}
        className="flex justify-center items-center min-h-full"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
