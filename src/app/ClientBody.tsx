"use client";

import { useEffect } from "react";
import { NavBar } from "@/components/layout/NavBar";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <main className="bg-background min-h-screen text-foreground dark">
      <NavBar />
      <div data-overlay-container="true">
        {children}
      </div>
    </main>
  );
}
