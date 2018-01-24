
const multiplier = {
  // numbers - an array of numbers
  // multiplyBy - single number
  // multiply - return a new array where numbers have been multiplied
  numbers: [1, 2, 3, 4],
  multiplyBy: 278,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());