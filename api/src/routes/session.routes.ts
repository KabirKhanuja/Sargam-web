import { Router } from "express";
import {
  startSession,
  endSession
} from "../controllers/session.controller";

const router = Router();

router.post("/start", startSession);
router.post("/end", endSession);

export default router;