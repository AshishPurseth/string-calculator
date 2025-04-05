const { add } = require("./stringCalculator");

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for a single number", () => {
    expect(add("5")).toBe(5);
  });

  test("returns sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("returns sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("handles new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("throws exception for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
  });
});
