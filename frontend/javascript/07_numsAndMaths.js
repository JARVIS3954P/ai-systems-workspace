const score = 95;
console.log(score); // Output: 95

// To dedicatedly define a variable as a number
const balance = new Number(1000);
console.log(balance); // Output: [Number: 1000]

/*******************************************Methods***************************************************/

// Convert number to string
console.log(score.toString()); // Output: "95"

// Format number to fixed decimal places
console.log(balance.toFixed(2)); // Output: "1000.00" , for two decimal places

// Get precision of a number
const pi = 3.14159;
console.log(pi.toPrecision(3)); // Output: "3.14" , for three significant digits
let num1 = 23.546;
console.log(num1.toPrecision(3)); // Output: "23.5" , for three significant digits
num1 = 123.546;
console.log(num1.toPrecision(3)); // Output: "124" , for three significant digits
num1 = 11234.546;
console.log(num1.toPrecision(3)); // Output: "1.12e+4" , for three significant digits

// Format the number to a specific locale
const number = 1000000;
console.log(number.toLocaleString('en-US')); // Output: "1,000,000" , for US locale
console.log(number.toLocaleString('en-IN')); // Output: "10,00,000" , for Indian locale

// Minimum and Maximum values for numbers in JavaScript
console.log(Number.MIN_VALUE); // Output: 5e-324 , the smallest positive number that can be represented
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308 , the largest positive number that can be represented
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991 , the smallest safe integer
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991 , the largest safe integer

/**********************************************Maths***************************************************/
console.log(Math.PI); // Output: 3.141592653589793 , the value of pi

console.log(Math.E); // Output: 2.718281828459045 , the value of Euler's number

console.log(Math.abs(-5)); // Output: 5 , absolute value

console.log(Math.round(4.7)); // Output: 5 , rounds to the nearest integer

console.log(Math.ceil(4.2)); // Output: 5 , rounds up to the nearest integer

console.log(Math.floor(4.7)); // Output: 4 , rounds down to the nearest integer

console.log(Math.sqrt(16)); // Output: 4 , square root

console.log(Math.pow(2, 3)); // Output: 8 , 2 raised to the power of 3

console.log(Math.max(1, 5, 3)); // Output: 5 , maximum value among the arguments

console.log(Math.min(1, 5, 3)); // Output: 1 , minimum value among the arguments

console.log(Math.random()); // Output: A random number between 0 (inclusive) and 1 (exclusive)
console.log((Math.random() * 10) + 1) // Output: A random number between 1 (inclusive) and 11 (exclusive), guaranteed

// To get numbers between a specific range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: A random integer between 10 and 20 (inclusive)
