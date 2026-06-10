// Function Definition
function sayMyName(){
    console.log("V");
    console.log("A");
    console.log("I");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
}
//sayMyName();
/*
function name without () is just a function reference,
as you add () it becomes a function call/execute and the code inside the function will be executed.
*/

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
//addTwoNumbers(3, 4);
/*
Here,
Parameters (or function parameters) : num1 and num2
Arguments (or function arguments) : 3 and 4
*/

// Returning a value from a function

function subtractTwoNumbers(num1, num2){
    return num1 - num2;
}
let result = subtractTwoNumbers(10, 5);
//console.log(result);

function logInGreeting(name){
    return `Welcome back, ${name}!`;
}
// console.log(logInGreeting("Vaibhav"));
// If no parameter is passed, it will return undefined
// console.log(logInGreeting()); // Welcome back, undefined!

// To handle this, either use if-else condition or default parameters
function logInGreeting(name = "Guest"){
    return `Welcome back, ${name}!`;
}
// OR
function logInGreeting(name){
    if(name === undefined){
        name = "Guest";
    } 
    return `Welcome back, ${name}!`;
}

// When number of arguments is unknown, we can use rest parameters
function sumAllNumbers(...numbers){
    return numbers
}
// console.log(sumAllNumbers(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]
/*
if the function parameters were,
function sumAllNumbers(num1, num2, ...numbers){
    return numbers
}
console.log(sumAllNumbers(10, 20, 30, 40)); // [30, 40] , num1 = 10, num2 = 20, numbers = [30, 40]
*/

// Passing objects and arrays as function arguments
const user = {
    name: "John Doe",
    age: 30
}
const arr = [100, 200, 300, 400]

function printUserInfo(user){
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}
printUserInfo(user)
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(arr))