// Immediately Invoked Function Expressions (IIFE)

/*
When calling a function, like,
chai() -> chai is function reference and () is execute call
But, sometimes we need some function that needs to be executed/called as soon as the program starts.
In these scenarios, IIFE come into help, where we wrap the function reference inside (), and then execute ()
*/

// Normally
function persistentConnection(){
    console.log(`DB Connected`)
}
// persistentConnection(); // Needs to be called

// Making a IIFE
(function dbConnection(){
    //It is a named IIFE
    console.log(`DB Connected`)
})();

// Use ; to end the context of IIFE before the start of another function

// Using Arrow function and creating an Unnamed IIFE
((db) => {
    console.log(`Persistent Connected to ${db}`)
})('PSql');
//db is the parameter for this IIFE, and PSql is passed as an arguement to it

/*******************************Why IIFE?*********************************************
1. Create a Private Scope

Variables and functions declared inside an IIFE are accessible only within that IIFE.
They do not leak into the global scope.

This helps in data hiding and prevents accidental access or modification from other parts of the program.

Example:
(function () {
    let secret = "hidden";
})();

console.log(secret); // ReferenceError

2. Avoid Global Namespace Pollution

When multiple scripts are loaded into the same application,
global variables and functions may accidentally overwrite each other.

An IIFE keeps variables and helper functions confined to its own scope,
reducing the risk of naming conflicts.

Example:
(function () {
    const version = "1.0";
    function initialize() {
        console.log("Initialized");
    }
})();

Neither 'version' nor 'initialize' are accessible globally.
*/