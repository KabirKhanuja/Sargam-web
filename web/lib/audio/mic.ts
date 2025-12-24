let audioContext: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let source: MediaStreamAudioSourceNode | null = null;

export async function startMic() {
  audioContext = new AudioContext();

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  source = audioContext.createMediaStreamSource(stream);
  analyser = audioContext.createAnalyser();

  analyser.fftSize = 2048;

  source.connect(analyser);

  return { audioContext, analyser };
}

export function stopMic() {
  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
  analyser = null;
  source = null;
}