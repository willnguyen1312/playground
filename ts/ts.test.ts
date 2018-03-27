import { greet } from "./ts"

describe("Typescript file", () => {
  it("should pass the test", () => {
    expect(greet("Nam")).toBe("Hello, Nam")
  })
})
