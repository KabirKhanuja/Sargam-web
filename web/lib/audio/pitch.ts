import { YIN } from "pitchfinder";

const yin = YIN({ sampleRate: 44100 });

export function detectPitch(
  analyser: AnalyserNode,
  buffer: Float32Array
) {
  const audioBuffer = new Float32Array(buffer.length);
  analyser.getFloatTimeDomainData(audioBuffer);
  buffer.set(audioBuffer);

  const pitch = yin(buffer);

  if (!pitch) return null;

  return {
    frequency: pitch,
    confidence: 1 
  };
}