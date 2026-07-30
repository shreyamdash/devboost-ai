"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleFormat = () => {
    if (!input.trim()) {
      setError(null);
      setOutput("");
      return;
    }
    
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError(null);
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">JSON Formatter</h1>
          <p className="text-muted-foreground">Paste ugly JSON. Press Format. Done.</p>
        </div>
        <Button onClick={handleFormat} size="lg">Format JSON</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col border-border/40 shadow-sm">
          <CardHeader>
            <CardTitle>Ugly JSON</CardTitle>
            <CardDescription>Paste your unformatted JSON payload here.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col">
              <Label htmlFor="input" className="sr-only">Input JSON</Label>
              <Textarea
                id="input"
                placeholder='{"example": "paste here"}'
                className="flex-1 min-h-[500px] resize-none font-mono text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            {error && <p className="text-sm text-destructive font-medium">{error}</p>}
          </CardContent>
        </Card>

        <Card className="flex flex-col border-border/40 shadow-sm">
          <CardHeader>
            <CardTitle>Beautiful JSON</CardTitle>
            <CardDescription>Formatted, readable, and clean.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <Label htmlFor="output" className="sr-only">Formatted JSON</Label>
            <Textarea
              id="output"
              placeholder="Formatted output will appear here..."
              className="flex-1 min-h-[500px] resize-none font-mono text-sm bg-muted/30"
              readOnly
              value={output}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
