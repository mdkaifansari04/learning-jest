const demoFn = async (callback) => {
  try {
    const res = new Promise((resolves) => {
      callback("hello world");
      resolves();
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = demoFn;
