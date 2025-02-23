const mockFunction = jest.fn();

test("mock function ", () => {
  mockFunction("Hello");
  mockFunction("World");

  expect(mockFunction).toHaveBeenCalledWith("Hello");
  expect(mockFunction).toHaveBeenCalled();
});
