//  Give Array of integers, use the map method to return a new array where each element is squared
// input : [1,2,3,4] output : [1,4,9,16]

let numbers = [1, 2, 3, 4];

let squarednumbers = numbers.map((elem) => elem * elem);

console.log(squarednumbers); // Output: [1, 4, 9, 16]
