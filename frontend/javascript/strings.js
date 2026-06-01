//__proto__ is a property that exists on all JavaScript objects and is used to access the prototype of an object.
// The prototype is an object that contains properties and methods that can be inherited by other objects.
// When you access a property or method on an object, JavaScript first looks for it on the object itself.
// If it doesn't find it there, it looks for it on the object's prototype, and so on up the prototype chain until it finds the property or method or reaches the end of the chain (null).


// String in JS is denoted by single or double quotes
let str1 = 'Hello';
let str2 = "World";

// String concatenation
//console.log( str1 + ' ' + str2 ); // Hello World

/* Concatenation using '+' operator is not a good practice for multiple strings.
    Instead, use String interpolation for better readability and performance.*/

//Eg : String interpolation using template literals (backticks)
//console.log(`${str1}, my name is ${str2}.`); // Hello, my name is World.

// String Declaration using String constructor
let str3 = new String('JARVIS');
console.log(str3); // [String: 'JARVIS']

/* 
It expands the string object into a key : value pair,
    where the key is the index of the character and the value is the character itself.
For example, str3[0] will give you 'J', str3[1] will give you 'A', and so on.
*/

// String properties and methods

// 1. Accessing characters
console.log(str3[0]); // Output: J
console.log(str3.charAt(1)); // Output: A

// 2. String length
console.log(str3.length); // Output: 6

// 3. toUpperCase() and toLowerCase()
console.log(str3.toUpperCase()); // Output: JARVIS
console.log(str3.toLowerCase()); // Output: jarvis
/*
Note: The original string (str3) remains unchanged as strings are immutable in JavaScript.
        The concept of stack and heap comes into picture here.
        Here, str3 is stored in the heap memory as an object, and the variable str3 holds a reference to that memory location.
        When we call methods like toUpperCase() or toLowerCase(),
            they create a new string in the heap memory and return a reference to that new string.
        The original string (str3) remains unchanged in the heap memory, and str3 still references the original string.
*/

// 4. Character at an index and Index of a character
console.log(str3.charAt(2)); // Output: R
console.log(str3.indexOf('V')); // Output: 3

// 5. Substring and slice
console.log(str3.substring(1, 4)); // Output: ARV , 4th index is not included
console.log(str3.substring(-2, 4)); // Output: JARV , negative index is treated as 0
console.log(str3.slice(1, 4)); // Output: ARV
console.log(str3.slice(-2)); // Output: IS
/*
Note: The difference between substring() and slice() is that substring() does not accept negative indices, while slice() does.
        If you try to use a negative index with substring(), it will treat it as 0, whereas slice() will count from the end of the string.
        For example, str3.substring(-2) will return the entire string 'JARVIS', while str3.slice(-2) will return 'IS'.
*/

// 6. Remove whitespace
let str4 = '   Hello World!   ';
console.log(str4.trim()); // Output: 'Hello World!'
// Works for whitespaces and line terminators (like \n, \t, etc.)

// 7. Replace a substring
console.log(str3.replace('JAR', 'MAR')); // Output: MARVIS
// Note: The original string (str3) remains unchanged as strings are immutable in JavaScript.

// 8. Includes and startsWith
console.log(str3.includes('VIS')); // Output: true
console.log(str3.startsWith('JAR')); // Output: true
console.log(str3.endsWith('VIS')); // Output: true

// 9. Split based on a delimiter
let str5 = 'Hello,World,JavaScript';
console.log(str5.split(',')); // Output: [ 'Hello', 'World', 'JavaScript' ]

// 10. String to Array and Array to String
let str6 = 'JARVIS';
let arr1 = str6.split('');
console.log(arr1); // Output: [ 'J', 'A', 'R', 'V', 'I', 'S' ]
let str7 = arr1.join('');
console.log(str7); // Output: JARVIS