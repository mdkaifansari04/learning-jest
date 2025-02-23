// toEqual checks the value not the reference

test("not strick checking ", () => {
  const obj = { one: 1 };
  obj["two"] = 2;

  expect(obj).toEqual({ one: 1, two: 2 });
});
