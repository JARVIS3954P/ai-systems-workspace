"use strict";
/*
This treats all JS code as newer version.
Javascript is a dynamically typed language, which means that variables can hold values of any type and the type can change at runtime.
*/

// NOTE : The JS engine was primitively hidden inside browsers, but now it is available as a standalone application called Node.js, which allows developers to run JS code outside of the browser environment.

// Data types in JavaScript

/* Primitive data types:
1. number : Range (-2^53 to 2^53)
2. bigint : For numbers larger than 2^53
3. string : For text data, syntax -> "" or ''
4. boolean : For true/false values
5. null : stangalone value that represents "nothing" or "empty", the memory is allocated but not assigned any value
6. undefined : A variable that has been declared but not assigned a value, variables remain uninitialised
7. symbol : A unique and immutable primitive value, often used as object property keys
*/

// Examples

let name = "John"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let bigIntValue = 9007199254740991n; // BigInt
let emptyValue = null; // Null
let uninitializedValue; // Undefined
let uniqueId = Symbol("id"); // Symbol
let anotherUniqueId = Symbol("id"); // Another symbol with the same description
console.log(uniqueId === anotherUniqueId); // Output: false (each symbol is unique, even if they have the same description)

console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof bigIntValue); // Output: bigint
console.log(typeof emptyValue); // Output: object (this is a quirk in JavaScript, null is considered an object)
console.log(typeof uninitializedValue); // Output: undefined
console.log(typeof uniqueId); // Output: symbol


/*Reference (non-primitive) data types:
1. Array : An ordered collection of values, syntax -> []
2. Object : A collection of key-value pairs, syntax -> {}
3. Function : A reusable block of code that performs a specific task, syntax -> function() {}
4. Date : A built-in object that represents a specific point in time, syntax -> new Date()
*/

// Examples

const heroes = ["Iron Man", "Captain America", "Thor"]; // Array

let person = {
    name: "Alice",
    age: 25,
    isStudent: false
}; // Object
const greet = function() {
    console.log("Hello, World!");
}; // Function

const currentDate = new Date(); // Date

console.log(typeof heroes); // Output: object (arrays are a type of object in JavaScript)
console.log(typeof person); // Output: object
console.log(typeof greet); // Output: function
console.log(typeof currentDate); // Output: object (dates are also a type of object in JavaScript)



/*************************** Summary of Outputs ***************************
Primitive Data Types:
1. Number => number
2. String => string
3. Boolean => boolean
4. BigInt => bigint
5. Null => object
6. Undefined => undefined
7. Symbol => symbol

Reference Data Types:
1. Array => object
2. Object => object
3. Function => function
4. Date => object
*/
