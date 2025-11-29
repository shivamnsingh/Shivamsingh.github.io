"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="top-0 z-40 sticky inset-x-0 flex justify-center items-center bg-background/70 backdrop-blur-lg backdrop-saturate-150 w-full h-auto">
      <header className="relative z-40 flex flex-row flex-nowrap justify-center items-center gap-4 bg-zinc-900/90 my-8 px-2 rounded-xl w-auto max-w-[1024px] h-11">
        <ul className="flex flex-row flex-nowrap items-center justify-center gap-4 h-full">
          <NavItem href="/" isActive={pathname === "/"}>
            Home
          </NavItem>
          <NavItem href="/projects" isActive={pathname === "/projects"}>
            Projects
          </NavItem>
          <NavItem href="/contact" isActive={pathname === "/contact"}>
            Contact
          </NavItem>
        </ul>
      </header>
    </nav>
  );
}

interface NavItemProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

function NavItem({ href, isActive, children }: NavItemProps) {
  return (
    <li
      className={`relative flex items-center font-medium text-sm whitespace-nowrap transition-all list-none rounded-lg
        ${isActive
          ? "bg-background dark:bg-zinc-950 text-foreground font-semibold after:absolute after:content-[''] after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:rounded-[2px]"
          : "text-zinc-500 hover:text-opacity-60"
        }`}
    >
      <Link className="px-3 py-1.5 rounded-lg" href={href}>
        {children}
      </Link>
    </li>
  );
}
