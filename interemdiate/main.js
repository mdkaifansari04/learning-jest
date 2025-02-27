function checkInvalidInput(value) {
  if (typeof value !== "number") {
    throw new Error("Invalid input provided");
  }
}

module.exports = checkInvalidInput;
