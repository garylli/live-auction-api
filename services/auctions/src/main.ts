import type { Handler } from "express";
import http from "http";
import https from "https";
import express from "express";
import { healthCheck } from "./api/v1/health-check.ts";
import { logger } from "./modules/logging/index.ts";

const HTTP_PORT = process.env.HTTP_PORT;
const HTTPS_PORT = process.env.HTTPS_PORT;

const configureService = () => {
  const service = express();

  service.get("/health", healthCheck);

  return service;
};

const service = configureService();
const httpServer = http
  .createServer(service)
  .listen(HTTP_PORT)
  .on("listening", () => {
    logger.info("HTTP Server listening on", httpServer.address());
  });

const httpsServer = https
  .createServer(service)
  .listen(HTTPS_PORT)
  .on("listening", () => {
    logger.info("HTTPS Server listening on", httpsServer.address());
  });

export { configureService };
