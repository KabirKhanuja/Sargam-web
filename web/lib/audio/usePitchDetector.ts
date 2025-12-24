"use client";

import { useEffect, useRef } from "react";
import { startMic, stopMic } from "./mic";
import { detectPitch } from "./pitch";

export function usePitchDetector(running: boolean) {
  const analyserRef = useRef<AnalyserNode | null>(null);
  const bufferRef = useRef<Float32Array | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;

    let cancelled = false;

    async function init() {
      const { analyser } = await startMic();
      analyserRef.current = analyser;
      bufferRef.current = new Float32Array(analyser.fftSize);

      loop();
    }

    function loop() {
      if (cancelled || !analyserRef.current || !bufferRef.current) return;

      const result = detectPitch(
        analyserRef.current,
        bufferRef.current
      );

      if (result) {
        console.log(
          ` ${result.frequency.toFixed(2)} Hz`
        );
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    init();

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      stopMic();
    };
  }, [running]);
}