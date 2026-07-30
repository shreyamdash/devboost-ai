"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Base64Encoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const handleProcess = () => {
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input))));
      }
    } catch (e) {
      setOutput("Error: Invalid input for this operation.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Base64 Encoder/Decoder</h1>
          <p className="text-muted-foreground">Quickly encode or decode Base64 strings.</p>
        </div>
        <div className="flex items-center gap-2 bg-muted p-1 rounded-lg">
          <Button 
            variant={mode === "encode" ? "default" : "ghost"} 
            onClick={() => { setMode("encode"); setOutput(""); }}
            size="sm"
          >
            Encode
          </Button>
          <Button 
            variant={mode === "decode" ? "default" : "ghost"} 
            onClick={() => { setMode("decode"); setOutput(""); }}
            size="sm"
          >
            Decode
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="input">{mode === "encode" ? "Raw Text" : "Base64 String"}</Label>
          <Textarea
            id="input"
            placeholder={`Paste your ${mode === "encode" ? "text" : "base64"} here...`}
            className="min-h-[300px] resize-none font-mono text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="output">Result</Label>
          <Textarea
            id="output"
            readOnly
            className="min-h-[300px] resize-none font-mono text-sm bg-muted/30"
            value={output}
          />
        </div>
      </div>
      
      <Button onClick={handleProcess} size="lg" className="mt-6 w-full md:w-auto">
        {mode === "encode" ? "Encode to Base64" : "Decode from Base64"}
      </Button>
    </div>
  );
}
