// JavaScript engines internally use Stack and Heap memory,
// but the ECMAScript specification does not mandate a specific memory model.
// As a mental model, Stack and Heap help explain how values and references behave.

/********************************** Stack Memory *********************************
Stack memory is generally used by JavaScript engines for managing execution contexts,
function calls, and storing primitive values efficiently.

Primitive Data Types:
- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt

When a primitive value is assigned to another variable, a copy of the value is created.
*******************************************************************************/

/********************************** Heap Memory **********************************
Heap memory is generally used for storing reference types (objects).

Reference Types:
- Object
- Array
- Function
- Date
- Map
- Set
- etc.

Variables do not store the actual object directly.
Instead, they store a reference to the object located in memory.

When a reference value is assigned to another variable, the reference is copied,
so both variables point to the same underlying object.
*******************************************************************************/


// Primitive Example (Copy by Value)

let a = 10;
let b = a;     // A copy of 10 is assigned to b

b = 20;

console.log(a); // 10
console.log(b); // 20


// Reference Example (Copy by Reference)

let user1 = {
    name: "Jarvis"
};

let user2 = user1; // Reference is copied

user2.name = "Tony";

console.log(user1.name); // Tony
console.log(user2.name); // Tony


/* Important:

Do NOT think of JavaScript as:
    "Primitives are always stored on Stack"
    "Objects are always stored on Heap"

These are implementation details that may vary between JavaScript engines.

The key concept to remember is:

    Primitive Values  -> Copy by Value
    Reference Values  -> Copy the Reference (Shared Object)

*/