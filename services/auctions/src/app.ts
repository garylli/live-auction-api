import express from "express";
import { discoveryRouter } from "./routes/discovery.ts";

const createApp = () => {
  const app = express();

  app.use("/", discoveryRouter);

  return app;
};

export { createApp };
