"use client";

import { useState } from "react";
import { marked } from "marked";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function MarkdownConverter() {
  const [markdown, setMarkdown] = useState("# Hello World\n\nWrite your **markdown** here!");
  
  // Basic marked conversion (synchronous)
  const html = marked.parse(markdown, { async: false }) as string;

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Markdown ↔ HTML Converter</h1>
        <p className="text-muted-foreground">Instantly convert Markdown syntax into raw HTML.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col border-border/40 shadow-sm">
          <CardHeader>
            <CardTitle>Markdown Input</CardTitle>
            <CardDescription>Type or paste your markdown here.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <Label htmlFor="markdown" className="sr-only">Markdown Input</Label>
            <Textarea
              id="markdown"
              className="flex-1 min-h-[500px] resize-none font-mono text-sm"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </CardContent>
        </Card>

        <Card className="flex flex-col border-border/40 shadow-sm">
          <CardHeader>
            <CardTitle>Raw HTML Output</CardTitle>
            <CardDescription>Generated HTML code, ready to copy.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <Label htmlFor="html" className="sr-only">HTML Output</Label>
            <Textarea
              id="html"
              readOnly
              className="flex-1 min-h-[500px] resize-none font-mono text-sm bg-muted/30"
              value={html}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
