import { Request, Response } from "express";
import { RiyazSession } from "../models/RiyazSession";

export const startSession = async (req: Request, res: Response) => {
  const { scale, startTime } = req.body;

  if (!scale || !startTime) {
    return res.status(400).json({ error: "scale and startTime required" });
  }

  const session = await RiyazSession.create({
    scale,
    startTime: new Date(startTime),
    endTime: new Date(startTime), 
    totalDurationSec: 0,
    effectiveDurationSec: 0
  });

  res.json({ sessionId: session._id });
};

export const endSession = async (req: Request, res: Response) => {
  const {
    sessionId,
    endTime,
    totalDurationSec,
    effectiveDurationSec
  } = req.body;

  if (
    !sessionId ||
    !endTime ||
    totalDurationSec == null ||
    effectiveDurationSec == null
  ) {
    return res.status(400).json({
      error: "sessionId, endTime, totalDurationSec, effectiveDurationSec required"
    });
  }

  const session = await RiyazSession.findById(sessionId);

  if (!session) {
    return res.status(404).json({ error: "Session not found" });
  }

  session.endTime = new Date(endTime);
  session.totalDurationSec = totalDurationSec;
  session.effectiveDurationSec = effectiveDurationSec;

  await session.save();

  res.json({ success: true });
};