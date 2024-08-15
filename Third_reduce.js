// Given an array of numbers, use the reduce method to find the product of all the numbers.
// input = [1,2,3,4] output = [24]

let numbers = [1, 2, 3, 4, 5, 6];
let product = numbers.reduce((acc = 1, i) => (acc *= i));
console.log(product); // Output: 24
