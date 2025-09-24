import type { Handler } from "express";

const healthCheck: Handler = (req, res) => {
  res.json("Hello, World!");
};

export { healthCheck };
