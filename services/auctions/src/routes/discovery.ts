import { Router } from "express";
import { healthCheck } from "../controllers/health-check.ts";

const discoveryRouter = Router();

discoveryRouter.get("/health", healthCheck);

export { discoveryRouter };
