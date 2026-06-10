/*
1. {} -> block, anything written inside this will be accessed withing the block having block scope
2. Anything declared outside {} will have a global scope, meaning, can be accessed from anywhere.
*/

let a = 10
const b = 20
var c = 30

if (true){
    let a = 100
    const b = 200
    c = 300
    // console.log("Inside Block: ", a) // Will get printed, as it has access to the block scoped 'a'
}

// console.log(a) // No change, as the updation is done to variable 'a' inside a block
// console.log(b) // No change, as the updation is done to variable 'b' inside a block
// console.log(c) // since var has global scope, c can be accessed and modified inside a block and printed outside of it

// Scope in nesting

function parent(){
    const username = "John"
    function child(){
        const website = "youtube"
        console.log(username) // John
    }
    // console.log(website) // ReferenceError: website is not defined
    child()
}
//parent()
/*
The child block has access to the parent block's variables and methods as for it, the parent block is the global scope,
    but parent block cannot access the child block's variables and method.
*/

/****************************Interesting******************************************/

one() // Function call before declaration, accepted
function one(){
    console.log("1")
}

two() // ReferenceError: Cannot access 'two' before initialization, here the function becomes an expression
const two = function(){
    console.log("2")
}