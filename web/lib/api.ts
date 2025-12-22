const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

export async function startSession(scale: string) {
  const res = await fetch(`${API_BASE}/sessions/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      scale,
      startTime: new Date().toISOString()
    })
  });

  return res.json();
}

export async function endSession(payload: {
  sessionId: string;
  totalDurationSec: number;
  effectiveDurationSec: number;
}) {
  const res = await fetch(`${API_BASE}/sessions/end`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      endTime: new Date().toISOString()
    })
  });

  return res.json();
}