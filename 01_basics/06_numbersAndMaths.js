const score = 300
// console.log(score); //300

const balance = new Number (100)
// console.log(balance);  //[Number: 100]

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2));  // 100.00

const otherNumber = 123.8345

// console.log(otherNumber.toPrecision(3)); //it will round off the number and return => 124

const num = 1000000
// console.log(num.toLocaleString('en-IN')); // => 10,00,000 

// ++++++++++++++++++++++++  Maths  ++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  //4
// console.log(Math.round(4.3)); //4
// console.log(Math.ceil(4.3));//5
// console.log(Math.floor(4.8)); //4

// console.log(Math.pow(7, 2)); // 49
// console.log(Math.sqrt(49));  // 7


console.log(Math.random());  //this will return random number between 0 and 1 ...
console.log((Math.random()*10)+1);  // by Multiplying 10 and adding 1 it will return a the number between 1 to 10
console.log(Math.floor((Math.random()*10) + 1)); // while using floor it will round down the number  

const min = 10 
const max = 20 

// Generates a random integer between min (10) and max (20), inclusive.
// Math.random() gives a float between 0 (inclusive) and 1 (exclusive).
// (max - min + 1) ensures the range includes both min and max.
// Math.floor() rounds down to the nearest whole number.
// Adding min shifts the range up to start at min.
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
