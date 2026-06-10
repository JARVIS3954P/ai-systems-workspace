/*
1. 'this' keyword is used to refer to current context
2. for global context, this refers to an empty object, in NODE ENVIRONMENT
3. for global context, this refers to WINDOWS ENVIRONMENT, in BROWSER. Because earlier the engine was built into browsers.
*/

const hello = {
    username : "World",
    greet : function(){
        console.log(`Hello , ${this.username}`)
        console.log(this)
    }
}

// hello.greet()
/* Output :
Hello , World
{ username: 'World', greet: [Function: greet] }
*/
hello.username = "Jarvis"
// hello.greet()
/* Output :
Hello , Jarvis
{ username: 'Jarvis', greet: [Function: greet] }
*/

// console.log(this) // Output : {}
/*
Inside browser, console.log(this), output:
    Window {window: Window, self: Window, document: document, name: '', location: Location, …}
*/

//'this' has no context inside a function
function chai(){
    let username = "Tea"
    console.log(this.username) //Output : undefined
}
// chai() 

/****************************************** Arrow Function ***************************************************/
// Basic Syntax,  () = {}
const addTwo = (num1, num2) => {
    return num1 + num2 // Explicit return, i.e., you are explicitly writing return keyword for the statement
}

// When the function has only one, i.e., the return statement, use Implicit return, where JS assumes you are returning the only line written after the arrow function, without you writing the 'return' keyword
const addThree = (num1, num2, num3) => num1 + num2 + num3
// The statement num1 + num2 + num3, here, can also be wrapped inside (), but no use of 'return' keyword is expected.

/* To return an object, wrap it inside {} which goes inside (), e.g. :*/
const hi = () => ({hello})
console.log(hi())
/* Output:
{ hello: { username: 'Jarvis', greet: [Function: greet] } }
 */