import Link from "next/link";

export function Navbar() {
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
            <Link href="/prompt-optimizer" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">Prompt Optimizer</Link>
            <Link href="/token-counter" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">Token Counter</Link>
            <Link href="/json-formatter" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">JSON Formatter</Link>
            <Link href="/cost-calculator" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">Cost Calculator</Link>
            <Link href="/markdown-converter" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">Markdown</Link>
            <Link href="/base64-encoder" className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">Base64</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
