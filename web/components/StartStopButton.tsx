"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { startSession, endSession } from "@/lib/api";
import { usePitchDetector } from "@/lib/audio/usePitchDetector";

export function StartStopButton({ scale }: { scale: string }) {
  const [running, setRunning] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [startTs, setStartTs] = useState<number>(0);
  const [elapsed, setElapsed] = useState(0);

  usePitchDetector(running);


  const handleStart = async () => {
    const res = await startSession(scale);
    setSessionId(res.sessionId);
    setStartTs(Date.now());
    setRunning(true);
  };

  const handleStop = async () => {
    if (!sessionId) return;

    const totalDurationSec = Math.floor((Date.now() - startTs) / 1000);

    await endSession({
      sessionId,
      totalDurationSec,
      effectiveDurationSec: 0 
    });

    setRunning(false);
    setSessionId(null);
    setElapsed(0);
  };

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTs) / 1000));
    }, 1000);

    return () => clearInterval(id);
  }, [running, startTs]);

  return (
    <Button
      variant={running ? "destructive" : "default"}
      onClick={running ? handleStop : handleStart}
    >
      {running ? "Stop Riyaz" : "Start Riyaz"}
    </Button>
  );
}