const fetchData = require("./hard");

const mockFn = jest.fn();

test("should fetch data", async () => {
  fetchData(mockFn);
  setTimeout(() => {
    expect(mockFn).toHaveBeenCalledWith("Data received");
    expect(mockFn).toHaveBeenCalledTimes(1);
  }, [1100]);
});
