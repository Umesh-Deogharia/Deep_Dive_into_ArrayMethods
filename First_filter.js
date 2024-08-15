//  Given an array of numbers, use the filter method to return a new array containing only the even numbers. example :- input => [1,2,3,4,5,6]; output => [2,4,6]

let array = [1, 2, 3, 4, 5, 6];
let evenNumbers = array.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

let numbers = array.filter((Element) => {
  return Element % 2 === 0;
});

console.log(numbers); // Output: [2, 4, 6]
