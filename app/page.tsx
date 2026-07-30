import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      <main className="flex-1 container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-8 gap-2">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          100% Open Source (MIT)
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          Developer tools. <br className="hidden sm:inline" />
          <span className="text-muted-foreground">Powered by AI.</span>
        </h1>
        
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-6">
          Optimize prompts. Estimate tokens. Format JSON. <br />
          An open-source toolkit designed to simplify common AI development workflows.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 text-sm text-muted-foreground/80 font-medium">
          <span className="bg-muted px-3 py-1 rounded-full">Next.js 15</span>
          <span className="bg-muted px-3 py-1 rounded-full">TypeScript</span>
          <span className="bg-muted px-3 py-1 rounded-full">Tailwind CSS</span>
          <span className="bg-muted px-3 py-1 rounded-full">shadcn/ui</span>
        </div>
        
        <div className="flex gap-4 mb-24 flex-col sm:flex-row">
          <Link href="/prompt-optimizer">
            <Button size="lg" className="rounded-full w-full sm:w-auto">Launch App</Button>
          </Link>
          <a href="https://github.com/shreyamdash/devboost-ai" target="_blank" rel="noreferrer">
            <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
              <Star className="mr-2 h-4 w-4" /> View Source on GitHub
            </Button>
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl text-left">
          <Link href="/prompt-optimizer" className="group relative flex flex-col justify-between rounded-2xl border bg-card p-6 hover:border-foreground/20 transition-colors shadow-sm">
            <div>
              <h3 className="font-mono font-semibold tracking-tight mb-2">Prompt Optimizer</h3>
              <p className="text-sm text-muted-foreground">Transform any short prompt into a detailed, expert-level prompt for LLMs.</p>
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition-opacity">
              Open Tool <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
          <Link href="/token-counter" className="group relative flex flex-col justify-between rounded-2xl border bg-card p-6 hover:border-foreground/20 transition-colors shadow-sm">
            <div>
              <h3 className="font-mono font-semibold tracking-tight mb-2">Token Counter</h3>
              <p className="text-sm text-muted-foreground">Estimate token counts for GPT, Claude, and Gemini instantly.</p>
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition-opacity">
              Open Tool <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
          <Link href="/json-formatter" className="group relative flex flex-col justify-between rounded-2xl border bg-card p-6 hover:border-foreground/20 transition-colors shadow-sm">
            <div>
              <h3 className="font-mono font-semibold tracking-tight mb-2">JSON Formatter</h3>
              <p className="text-sm text-muted-foreground">Paste ugly JSON. Press format. Done. Clean and accessible.</p>
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition-opacity">
              Open Tool <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
          
          <Link href="/cost-calculator" className="group relative flex flex-col justify-between rounded-2xl border bg-card p-6 hover:border-foreground/20 transition-colors shadow-sm">
            <div>
              <h3 className="font-mono font-semibold tracking-tight mb-2">AI Cost Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate precise API costs for Claude, GPT, and Gemini models.</p>
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition-opacity">
              Open Tool <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
          <Link href="/markdown-converter" className="group relative flex flex-col justify-between rounded-2xl border bg-card p-6 hover:border-foreground/20 transition-colors shadow-sm">
            <div>
              <h3 className="font-mono font-semibold tracking-tight mb-2">Markdown Converter</h3>
              <p className="text-sm text-muted-foreground">Instantly convert Markdown syntax into raw HTML.</p>
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition-opacity">
              Open Tool <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
          <Link href="/base64-encoder" className="group relative flex flex-col justify-between rounded-2xl border bg-card p-6 hover:border-foreground/20 transition-colors shadow-sm">
            <div>
              <h3 className="font-mono font-semibold tracking-tight mb-2">Base64 Encoder</h3>
              <p className="text-sm text-muted-foreground">Fast utility to encode and decode base64 strings securely.</p>
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition-opacity">
              Open Tool <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        </div>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm leading-loose text-muted-foreground text-center md:text-left">
            Built by Shreyam Dash. The source code is available on{" "}
            <a href="https://github.com/shreyamdash/devboost-ai" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <p>Licensed under MIT</p>
            <span className="hidden sm:inline-block border-l h-4"></span>
            <p className="font-mono font-medium">v1.1.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
