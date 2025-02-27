const demoFn = require("./async");

describe("demo function", () => {
  it("should call a callback with hello world !", async () => {
    const mock = jest.fn();
    await demoFn(mock);
    expect(mock).toBeCalledWith("hello world");
  });
});
