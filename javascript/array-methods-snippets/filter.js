// filter(): creates a new array with all elements that pass
//  a test provided in a callback function.
let array = [1, 2, 3, 4, 5];

let evenNumbers = array.filter(function (element) {
  return element === 2;
});

console.log(evenNumbers);
