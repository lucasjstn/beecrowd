// every(): checks if every element in an array passes a test provided in a callback function. Returns true if all elements pass the test, and false if any element fails.
let array = [1, 2, 3, 4, 5];

let allPositive = array.every(function (element) {
  return element > 0;
});

console.log(allPositive);
