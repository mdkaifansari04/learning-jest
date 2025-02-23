function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}
module.exports = fetchData;
