import http from "http";
import https from "https";
import { logger } from "./modules/logging/index.ts";
import { createApp } from "./app.ts";

const HTTP_PORT = process.env.HTTP_PORT;
const HTTPS_PORT = process.env.HTTPS_PORT;

const service = createApp();
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
