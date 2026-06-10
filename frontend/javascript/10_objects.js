/*
Note: Singleton pattern is a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance.
Meaning that only one instance of the class can be created and that instance can be accessed globally throughout the application.
*/


/**************************************Declaration of Objects : Object Literal**************************************
Object literal is a simple way to create an object using curly braces {} and defining properties and values inside it.*/

//Declaring a Symbol
const id = Symbol("id"); // Unique identifier for the symbol

const person = {
    [id]: "myId", // To use a symbol as a property key, we need to use square brackets, and it can hold any value
    name: "John",
    "full name": "John Doe", // Property name with space must be in quotes
    age: 30,
    location: "New York",
    email: "john.doe@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday", "Friday"]
}

// Accessing properties of the object
// console.log(person.name); // Output: John, to access any property
// console.log(person["full name"]); // Output: John Doe, to access any property with space in its name
// console.log(person[id]); // Output: myId, to access the symbol property

// Updating properties of the object
person[id] = "1"; // Updating the symbol property
person.location = "Los Angeles"; // Updating the location property
// console.log(person[id]); // Output: 1
// console.log(person.location); // Output: Los Angeles

// Freezing the object to prevent any modifications to it
Object.freeze(person[id]); // Freezing a single property of the object
// Object.freeze(person); // Freezing the entire object, which means that no properties can be added, removed, or modified in the object.
person.age = 35; // This will not change the value of the age property
person[id] = "2"; // This will not change the value of the symbol property

// console.log(person); 
/* Output:
    {
    name: 'John',
    'full name': 'John Doe',
    age: 30, --------------------------------------------------> not changed
    location: 'Los Angeles',
    email: 'john.doe@example.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Wednesday', 'Friday' ],
    Symbol(id): '1'--------------------------------------------> not changed
    }
*/

//Function as an Object property
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}
// console.log(person.greet()); // Output: Hello, my name is John


/******************************************Declaration of Objects : Constructor Function*************************************
Constructor function is a special type of function that is used to create and initialize objects.
It is defined using the function keyword and is typically named with a capital letter to indicate that it is a constructor.
The constructor function can take parameters that are used to set the properties of the object being created.
When the constructor function is called with the new keyword,
    it creates a new object and sets its properties based on the parameters passed to the constructor.*/

const userOne = new Object(); // Creating an object using the Object constructor, i.e, a singleton object
// const userOne = {} -> No difference between this and the above line, both are creating an empty object, but this is a non-singleton object

userOne.id = 1;
userOne.name = "Alice";
userOne.isMale = true;
// console.log(userOne); // Output: { id: 1, name: 'Alice', isMale: true }

// Creating a nested object
const userTwo = {
    id: 2,
    fullname: {
        username: {
            firstName: "Bob",
            lastName: "Smith"
        }
    },
    isMale: true
};
// console.log(userTwo);
/* Output:
    {
    id: 2,
    fullname: { username: { firstName: 'Bob', lastName: 'Smith' } },
    isMale: true
    }
*/
// console.log(userTwo.fullname.username.firstName); // Output: Bob, accessing nested object property
/*
Use console.log(userTwo.fullname?.username?.firstName); to avoid error if any of the properties in the chain is undefined or null, it will return undefined instead of throwing an error.
Meaning that if those properties do not exist, it will not throw an error but will return undefined, which can be handled gracefully in the code.
*/

// Merging objects
const obj1 = {1: "one", 2: "two"};
const obj2 = {3: "three", 4: "four"};
const mergedObj = Object.assign({}, obj1, obj2); // Merging obj1 and obj2 into a new object, the first parameter is an empty object which will be the target object that will receive the properties of obj1 and obj2
// console.log(mergedObj); // Output: { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

// Method that will be actually used to merge objects, using spread operator
const mergedObj2 = {...obj1, ...obj2};
// console.log(mergedObj2); // Output: { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }


// When working with DB, the returned data is an array of objects like
 userData = [
    {id: 1, name: "Alice", age: 25},
    {id: 2, name: "Bob", age: 30},
    {id: 3, name: "Charlie", age: 35}
 ]
// To access the name of the second user, we can use the following code:
// console.log(userData[1].name);


// Handling and operating the key value pairs of an object
// console.log(Object.keys(userOne)); // Output: [ 'id', 'name', 'isMale' ], to get the keys of the object
// console.log(Object.values(userOne)); // Output: [ 1, 'Alice', true ], to get the values of the object
// console.log(Object.entries(userOne)); // Output: [ [ 'id', 1 ], [ 'name', 'Alice' ], [ 'isMale', true ] ], to get the key-value pairs of the object as an array of arrays
// Since the return value is an array, we can use array methods to manipulate it

// Checking if a property exists in an object
// console.log(userOne.hasOwnProperty("name")); // Output: true, to check if the object has a specific property
// console.log("name" in userOne); // Output: true, another way to check if the object has a specific property

/***********************************Destructuring Objects *************************************/

const item = {
    [id] : "itemId",
    name : "Laptop",
    specifications : {
        processor : "Intel i7",
        ram : "16GB"
    },
    price : 1200
}

// Destructuring the object to extract specific properties
const {specifications: specs} = item; // Extracting processor and ram properties from the specifications object
const {name, price} = item; // Extracting name and price properties from the item object
console.log(name); // Output: Laptop
console.log(price); // Output: 1200
console.log(specs); // Output: { processor: 'Intel i7', ram: '16GB' }

// Destructuring with renaming
const {specifications: {processor: cpu, ram: memory}} = item; // Extracting processor and ram properties from the specifications object and renaming them to cpu and memory respectively
console.log(cpu); // Output: Intel i7
console.log(memory); // Output: 16GB

// Destructuring specifications as specs and then destructuring specs to extract processor and ram properties
const {specifications: specs2} = item;
const {processor, ram} = specs2;
console.log(processor); // Output: Intel i7
console.log(ram); // Output: 16GB

//Note : Like objects, arrays can also be destructured to extract specific elements from the array and assign them to variables.