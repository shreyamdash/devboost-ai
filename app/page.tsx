import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center min-h-[calc(100vh-3.5rem)]">
      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-8">
        100% Open Source
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
        Developer tools. <br className="hidden sm:inline" />
        <span className="text-muted-foreground">Powered by AI.</span>
      </h1>
      
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-8">
        Optimize prompts. Estimate tokens. Format JSON. <br />
        An open-source toolkit designed to simplify common AI development workflows.
      </p>
      
      <div className="flex gap-4 mb-24">
        <Link href="/prompt-optimizer">
          <Button size="lg" className="rounded-full">Launch App</Button>
        </Link>
        <a href="https://github.com/shreyamdash/devboost-ai" target="_blank" rel="noreferrer">
          <Button size="lg" variant="outline" className="rounded-full">GitHub</Button>
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl text-left">
        <Link href="/prompt-optimizer" className="group relative rounded-2xl border bg-card p-6 hover:border-foreground/20 transition-colors shadow-sm">
          <h3 className="font-bold mb-2">Prompt Optimizer</h3>
          <p className="text-sm text-muted-foreground">Transform any short prompt into a detailed, expert-level prompt for LLMs.</p>
        </Link>
        <Link href="/token-counter" className="group relative rounded-2xl border bg-card p-6 hover:border-foreground/20 transition-colors shadow-sm">
          <h3 className="font-bold mb-2">Token Counter</h3>
          <p className="text-sm text-muted-foreground">Estimate token counts for GPT, Claude, and Gemini instantly.</p>
        </Link>
        <Link href="/json-formatter" className="group relative rounded-2xl border bg-card p-6 hover:border-foreground/20 transition-colors shadow-sm">
          <h3 className="font-bold mb-2">JSON Formatter</h3>
          <p className="text-sm text-muted-foreground">Paste ugly JSON. Press format. Done. Clean and accessible.</p>
        </Link>
      </div>
      
      <div className="mt-24 text-sm text-muted-foreground">
        More tools coming soon.
      </div>
    </div>
  );
}
