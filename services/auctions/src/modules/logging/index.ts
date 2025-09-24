import { Logger } from "../../config/logging.ts";

const baseLogger = new Logger({ name: "base-logger" });

export { baseLogger as logger };
