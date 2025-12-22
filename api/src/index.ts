import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import cors from "cors";
import { connectDB } from "./db/mongo";
import { env } from "./config/env";
import healthRoutes from "./routes/health.routes";
import sessionRoutes from "./routes/session.routes";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoutes);

connectDB();

app.listen(env.PORT, () => {
  console.log(`API running on port ${env.PORT}`);
});


app.use("/sessions", sessionRoutes);