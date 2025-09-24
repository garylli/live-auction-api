import express from "express";
import { healthCheck } from "./routes/health-check.ts";

const createApp = () => {
  const app = express();

  app.get("/health", healthCheck);

  return app;
};

export { createApp };
