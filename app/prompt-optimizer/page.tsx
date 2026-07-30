"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function PromptOptimizer() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOptimize = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input })
      });
      const data = await res.json();
      if (data.optimized) {
        setOutput(data.optimized);
      }
    } catch (e) {
      console.error(e);
      setOutput("Error optimizing prompt. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Prompt Optimizer</h1>
        <p className="text-muted-foreground">Transform any short prompt into a detailed, expert-level prompt for LLMs.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col border-border/40 shadow-sm">
          <CardHeader>
            <CardTitle>Input Prompt</CardTitle>
            <CardDescription>Enter a basic prompt you want to improve.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col">
              <Label htmlFor="input" className="sr-only">Input Prompt</Label>
              <Textarea
                id="input"
                placeholder='e.g. "Create login page"'
                className="flex-1 min-h-[250px] resize-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <Button onClick={handleOptimize} disabled={isLoading} className="w-full">
              {isLoading ? "Optimizing..." : "Optimize"}
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col border-border/40 shadow-sm">
          <CardHeader>
            <CardTitle>Optimized Prompt</CardTitle>
            <CardDescription>Ready to use with Claude or OpenAI.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <Label htmlFor="output" className="sr-only">Optimized Prompt</Label>
            <Textarea
              id="output"
              placeholder="Your optimized prompt will appear here..."
              className="flex-1 min-h-[250px] resize-none bg-muted/30"
              readOnly
              value={output}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
