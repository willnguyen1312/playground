import { vi, describe, expect, test } from "vitest";
import { sum } from "../sum";

// Edit an assertion and save to see HMR in action
vi.mock("../sum", () => ({
  sum: (a: number, b: number) => 1 + a + b,
}));

vi.mock("./myModule.js", () => ({
  myFunction: vi.fn(),
}));

describe("Basic tests", () => {
  test("Math.sqrt()", () => {
    expect(sum(1, 2)).toBe(4);
  });
});
