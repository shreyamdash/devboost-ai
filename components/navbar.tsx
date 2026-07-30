import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">
              DevBoost AI
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/prompt-optimizer"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Prompt Optimizer
            </Link>
            <Link
              href="/token-counter"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Token Counter
            </Link>
            <Link
              href="/json-formatter"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              JSON Formatter
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
