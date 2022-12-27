// map(): creates a new array with the results of calling a provided
// function on every element in the array.
let array = [1, 2, 3, 4, 5];

let squaredArray = array.map(function (element) {
  return Math.pow(element, 2);
});
console.log(squaredArray);
