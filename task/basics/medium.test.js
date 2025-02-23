const userSchema = require("./medium");

test("check user schema", () => {
  expect(userSchema()).toEqual({ name: "John", age: 25 });
});
