import { describe, expect, it } from "vitest";
import wrapWithSuperTest from "supertest";
import { createApp } from "../app.ts";

describe("Service Discovery", () => {
  const app = createApp();
  const request = wrapWithSuperTest(app);

  it("GET non-existent route returns 404", async () => {
    const res = await request.get("/12049812094q");
    expect(res.status).toBe(404);
  });

  it("GET /health returns 200", async () => {
    const res = await request.get("/health");
    expect(res.status).toBe(200);
  });
});
