export function secondsSince(startMs: number) {
  return Math.floor((Date.now() - startMs) / 1000);
}