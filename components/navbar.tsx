"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/prompt-optimizer", label: "Prompt Optimizer" },
    { href: "/token-counter", label: "Token Counter" },
    { href: "/json-formatter", label: "JSON Formatter" },
    { href: "/cost-calculator", label: "Cost Calculator" },
    { href: "/markdown-converter", label: "Markdown" },
    { href: "/base64-encoder", label: "Base64" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4">
        <div className="mr-4 flex flex-1">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">
              DevBoost AI
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium overflow-x-auto">
            {links.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`transition-colors hover:text-foreground/80 whitespace-nowrap ${pathname === link.href ? "text-foreground font-semibold" : "text-foreground/60"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
