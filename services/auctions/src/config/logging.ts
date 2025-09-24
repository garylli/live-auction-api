import { Logger as TSLogger } from "tslog";
import type { ILogObj } from "tslog";

type LoggerName = string;

class Logger {
  private logger: TSLogger<ILogObj>;
  constructor(options: { name: LoggerName }) {
    this.logger = new TSLogger({ name: options.name });
  }

  silly(...args: unknown[]) {
    this.logger.silly(args);
  }

  debug(...args: unknown[]) {
    this.logger.debug(args);
  }

  trace(...args: unknown[]) {
    this.logger.trace(args);
  }

  info(...args: unknown[]) {
    this.logger.info(args);
  }

  warn(...args: unknown[]) {
    this.logger.warn(args);
  }

  error(...args: unknown[]) {
    this.logger.error(args);
  }

  fatal(...args: unknown[]) {
    this.logger.fatal(args);
  }
}

export { Logger };
