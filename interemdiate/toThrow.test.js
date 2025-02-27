const checkInvalidInput = require("./main");

test("should check in valid input", () => {
  expect(() => {
    checkInvalidInput("akaksj");
  }).toThrow();
});
