/*
In JS, Arrays are a type of object that can hold multiple values.
They are ordered collections of items, and each item can be of any data type (e.g., string, number, boolean, etc.).
Arrays in JavaScript are dynamic, meaning they can grow or shrink in size as needed.
*/

//Simple Array declaration
const arr1 = ["Hello", 42, true];

/*
Also when copying an array, in JS it is a Shallow copy, meaning that if the array contains objects,
    the reference to those objects is copied, not the objects themselves.
So changes to the objects in the original array will affect the copied array and vice versa.
*/

// Array Declaration using Array constructor
const arr2 = new Array("Hello", 42, true);
console.log(arr2); // Output: ["Hello", 42, true]

/******************************************Array Methods*******************************************/
const myArray = [1, 2, 3, 4, 5];

// Adding an element to the end of the array
myArray.push(6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

// Removing the last element from the array
myArray.pop();
console.log(myArray); // Output: [1, 2, 3, 4, 5]

// Adding and removing an element to/from the beginning of the array
myArray.unshift(0);
console.log(myArray); // Output: [0, 1, 2, 3, 4, 5]
myArray.shift();
console.log(myArray); // Output: [1, 2, 3, 4, 5]

//Questioning into Arrays
console.log(myArray.includes(3)); // Output: true , checks if the array includes the value 3
console.log(myArray.indexOf(3)); // Output: 2 , returns the index of the first occurrence of 3

//Binding an array to a variable
const newArray = myArray.join();
console.log(newArray); // Output: "1,2,3,4,5" , joins the array elements into a string separated by commas
console.log(typeof newArray); // Output: "string" , the type of newArray is string

// Slice and Splice
const slicedArray = myArray.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4] , creates a new array from index 1 to index 3 (4 is not included)

const splicedArray = myArray.splice(1, 2);
console.log(splicedArray); // Output: [2, 3] , removes 2 elements starting from index 1 and returns the removed elements
console.log(myArray); // Output: [1, 4, 5] , the original array is modified after splice

/*
The main difference between slice and splice is that slice does not modify the original array, while splice does.
Slice returns a new array containing the selected elements, while splice returns an array containing the removed elements.
*/