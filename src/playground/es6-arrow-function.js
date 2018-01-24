//const square = function (x) {
//  return x * x;
//};

//const squareArrow = (x) => {
//  return x * x;
//}

// Arrow format expression syntax

// const squareArrow = (x) => x * x;

//console.log(squareArrow(10));

const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Bryan Tinker'));

const getFirstNameShorthand = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameShorthand('Brian Tinker'));