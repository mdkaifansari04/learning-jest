const greet = require("./easy");

test("two string are equal", () => {
  expect(greet("kaif")).toBe("Hello, kaif!");
  expect(greet("naman")).toEqual("Hello, naman!");
});
