import type { Application } from "express";
import type { Express } from "express";
import express from "express";
import http from "http";
import https from "https";
import { Logger } from "./logging.ts";

const logger = new Logger({ name: "service-config-logger" });

type Port = number;

class Service {
  service: Application;
  private _httpPort: Port;
  private _httpsPort: Port;
  private httpServer: http.Server;
  private httpsServer: https.Server;

  get httpPort(): Port {
    if (this.httpServer && this.httpServer.address()) {
      const address = this.httpServer.address();
      if (typeof address === "object" && address && "port" in address) {
        return address.port as Port;
      }
    }
    return this._httpPort;
  }

  get httpsPort(): Port {
    if (this.httpsServer && this.httpsServer.address()) {
      const address = this.httpsServer.address();
      if (typeof address === "object" && address && "port" in address) {
        return address.port as Port;
      }
    }
    return this._httpPort;
  }

  constructor(options: { httpPort: Port; httpsPort: Port }) {
    this.service = express();
    this._httpPort = options.httpPort;
    this._httpsPort = options.httpsPort;
    this.httpServer = http.createServer(this.service);
    this.httpsServer = https.createServer(this.service);
  }

  start() {
    this.httpServer.listen(this.httpPort).on("listening", () => {
      logger.info("HTTP Service now listening on", this.httpServer.address());
    });

    this.httpsServer.listen(this._httpsPort).on("listening", () => {
      logger.info("HTTPS Service now listening on", this.httpsServer.address());
    });
  }

  stop() {
    this.httpServer.close((err) => {
      logger.error(
        "Error occurred while attempting to close http service",
        err
      );
    });
    this.httpsServer.close((err) => {
      logger.error(
        "Error occurred while attempting to close https service",
        err
      );
    });
  }
}

export { Service };
