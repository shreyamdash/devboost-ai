"use client";

import { useState, useEffect } from "react";
import { encode } from "gpt-tokenizer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TokenCounter() {
  const [text, setText] = useState("");
  const [tokens, setTokens] = useState({ gpt: 0, claude: 0, gemini: 0 });

  useEffect(() => {
    if (!text) {
      setTokens({ gpt: 0, claude: 0, gemini: 0 });
      return;
    }

    try {
      // Base calculation using gpt-tokenizer
      const encoded = encode(text);
      const baseCount = encoded.length;
      
      // Rough estimations based on typical tokenizer differences
      setTokens({
        gpt: baseCount,
        claude: Math.ceil(baseCount * 0.95), // Claude often uses slightly fewer tokens
        gemini: Math.ceil(baseCount * 1.05)  // Gemini might use slightly more
      });
    } catch (e) {
      console.error(e);
      // Fallback rough estimate based on 4 chars per token
      const roughCount = Math.ceil(text.length / 4);
      setTokens({
        gpt: roughCount,
        claude: roughCount,
        gemini: roughCount
      });
    }
  }, [text]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Token Counter</h1>
        <p className="text-muted-foreground">Estimate token counts for GPT, Claude, and Gemini instantly.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur">
          <CardHeader className="pb-2">
            <CardDescription className="text-xs uppercase tracking-wider">GPT Tokens</CardDescription>
            <CardTitle className="text-4xl">{tokens.gpt.toLocaleString()}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur">
          <CardHeader className="pb-2">
            <CardDescription className="text-xs uppercase tracking-wider">Claude Tokens</CardDescription>
            <CardTitle className="text-4xl">{tokens.claude.toLocaleString()}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-border/40 shadow-sm bg-card/50 backdrop-blur">
          <CardHeader className="pb-2">
            <CardDescription className="text-xs uppercase tracking-wider">Gemini Tokens</CardDescription>
            <CardTitle className="text-4xl">{tokens.gemini.toLocaleString()}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="text-input" className="sr-only">Text to tokenize</Label>
        <Textarea
          id="text-input"
          placeholder="Paste your text here to count tokens..."
          className="min-h-[400px] resize-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p className="text-xs text-muted-foreground mt-2 text-right">
          {text.length.toLocaleString()} characters
        </p>
      </div>
    </div>
  );
}
