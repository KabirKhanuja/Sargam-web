"use client";

import { useState } from "react";
import { ScaleSelector } from "@/components/ScaleSelector";
import { StartStopButton } from "@/components/StartStopButton";

export default function Home() {
  const [scale, setScale] = useState("C");

  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-6 py-10 bg-background text-foreground">
      <h1 className="text-3xl font-semibold tracking-tight mb-2">
        Sargam
      </h1>

      <p className="text-muted-foreground mb-8">
        Your daily riyaz companion
      </p>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-8">
        <ScaleSelector value={scale} onChange={setScale} />
        <StartStopButton scale={scale} />
      </div>

      {/* Pitch visual placeholder */}
      <div className="w-full max-w-3xl h-40 border rounded-lg flex items-center justify-center text-muted-foreground">
        Pitch visual (coming soon)
      </div>

      {/* Piano placeholder */}
      <div className="w-full max-w-4xl h-32 mt-10 border rounded-lg flex items-center justify-center text-muted-foreground">
        Piano keyboard (coming soon)
      </div>
    </main>
  );
}