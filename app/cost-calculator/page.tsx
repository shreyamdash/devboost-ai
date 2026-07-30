"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MODELS = [
  { id: "claude-3-5-sonnet", name: "Claude 3.5 Sonnet", inputCost: 3.00, outputCost: 15.00 },
  { id: "claude-3-opus", name: "Claude 3 Opus", inputCost: 15.00, outputCost: 75.00 },
  { id: "gpt-4o", name: "GPT-4o", inputCost: 5.00, outputCost: 15.00 },
  { id: "gemini-1-5-pro", name: "Gemini 1.5 Pro", inputCost: 3.50, outputCost: 10.50 },
];

export default function CostCalculator() {
  const [inputTokens, setInputTokens] = useState<number>(1000000);
  const [outputTokens, setOutputTokens] = useState<number>(1000000);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">AI Cost Calculator</h1>
        <p className="text-muted-foreground">Compare API costs across Claude, GPT, and Gemini based on token volume.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="space-y-4">
          <Label htmlFor="input-tokens">Input Tokens (Millions)</Label>
          <Input 
            id="input-tokens" 
            type="number" 
            value={inputTokens / 1000000} 
            onChange={(e) => setInputTokens(Number(e.target.value) * 1000000)}
            step="0.1"
          />
          <p className="text-xs text-muted-foreground">{inputTokens.toLocaleString()} tokens</p>
        </div>
        <div className="space-y-4">
          <Label htmlFor="output-tokens">Output Tokens (Millions)</Label>
          <Input 
            id="output-tokens" 
            type="number" 
            value={outputTokens / 1000000} 
            onChange={(e) => setOutputTokens(Number(e.target.value) * 1000000)}
            step="0.1"
          />
          <p className="text-xs text-muted-foreground">{outputTokens.toLocaleString()} tokens</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {MODELS.map((model) => {
          const totalInputCost = (inputTokens / 1000000) * model.inputCost;
          const totalOutputCost = (outputTokens / 1000000) * model.outputCost;
          const total = totalInputCost + totalOutputCost;

          return (
            <Card key={model.id} className="border-border/40 shadow-sm bg-card/50 backdrop-blur">
              <CardHeader className="pb-2">
                <CardTitle>{model.name}</CardTitle>
                <CardDescription>
                  ${model.inputCost}/1M in | ${model.outputCost}/1M out
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-mono font-bold mt-4">
                  ${total.toFixed(2)}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
