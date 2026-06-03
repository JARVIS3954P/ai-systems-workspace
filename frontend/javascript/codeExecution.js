
//Javascript is a dynamically typed single threaded language

/* 
--------------------------------->JS Execution Context(EC)<------------------------------

1. The code always starts by defining a 'Global Execution Context' {}, which is referenced by 'this' keyword.
2. GEC is different for different execution environment, such as the context for 'this' inside browser is a Windows Object.
3. There are three types of EC:
    i. Global EC
    ii. Function(al) EC
    iii. Eval EC # Optional for interview POV, as this is a property of global object, so technically it resides in GEC
*/

/*
-----------------------------------> Execution of Code <---------------------------------
Program is executed in two phases,
1. Context Creation
2. Memory Creation Phase , or just, Creation Phase
-> Only memory is allocated for variables and objects that are needed for the program, no calculation or operation/s is/are performed.

3. Execution Phase
*/

// Code Example,
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)

/* Step by Step

1. Context Created
~ GEC -> this

2. Memory Phase
~ val1 -> undefined
~ val2 -> undefined
~ addNum -> function definition
~ result1 -> undefined
~ result2 -> undefined

3. Excution Phase
~ val1 <- 10
~ val2 <- 5
~ addNum ->
    ~3.1 New Executional Context
        ~[New Vairable Environment + Execution Thread]
    ~3.2 Memory Phase
        ~ num1 -> undefined
        ~ num2 -> undefined
        ~ total -> undefined
    ~3.3 Execution Phase
        ~ num1 <- 10
        ~ num2 <- 5
        ~ total <- 10
        ~ returned 'total' to GEC
    ~3.4 Deletion of Context
~ result1 <- 15
~ (repeat -> addNum)
~ result <- 12
*/

/***************************************Call Stack*******************************/
// Follows LIFO principle, for function calls
// First is GEC to go inside the stack.