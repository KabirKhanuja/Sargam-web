"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function StartStopButton() {
  const [running, setRunning] = useState(false);

  return (
    <Button
      variant={running ? "destructive" : "default"}
      onClick={() => setRunning(!running)}
    >
      {running ? "Stop Riyaz" : "Start Riyaz"}
    </Button>
  );
}