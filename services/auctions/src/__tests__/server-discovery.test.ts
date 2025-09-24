import { describe, expect, it, test } from "vitest";
import wrapWithSuperTest from "supertest";
import { Service } from "../config/service.ts";
import { configureService } from "../main.ts";

describe("Service Discovery", () => {
  const service = configureService();
  const request = wrapWithSuperTest(service);

  it("GET non-existent route returns 404", async () => {
    const res = await request.get("/12049812094q");
    expect(res.status).toBe(404);
  });

  it("GET /health returns 200", async () => {
    const res = await request.get("/health");
    expect(res.status).toBe(200);
  });
});
