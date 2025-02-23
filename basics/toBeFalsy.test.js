test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});

test("zero is falsy", () => {
  const zero = 0;
  expect(zero).toBeFalsy();
});
