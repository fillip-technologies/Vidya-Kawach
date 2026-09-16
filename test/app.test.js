import { describe, it } from "node:test";
import assert from "node:assert/strict";
import app from "../src/app.js";

describe("app", () => {
  it("exports an express application", () => {
    assert.strictEqual(typeof app, "function");
  });
});
