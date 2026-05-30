// ******************************Conversion Operations in JavaScript******************************


// Number Conversion

let score = 33
console.log(typeof score); // Output: number

valueInScore= Number(score)
console.log(typeof valueInScore); // Output: number
/*
The Number() function is used to convert the value of score to a number.
Since score is already a number, the conversion does not change its type or value.
The typeof operator confirms that valueInScore is of type number.
*/

score = "33abc"
console.log(typeof score); // Output: string

valueInScore= Number(score)
console.log(typeof valueInScore); // Output: number
console.log(valueInScore); // Output: NaN
/*
The Number() function attempts to convert the string "33abc" to a number.
Since the string contains non-numeric characters, the conversion fails and results in NaN (Not-a-Number).
The typeof operator confirms that valueInScore is of type number, even though it holds the value NaN.
*/

score = null
console.log(typeof score); // Output: object

valueInScore= Number(score)
console.log(typeof valueInScore); // Output: number
console.log(valueInScore); // Output: 0
/*
The Number() function attempts to convert the string "Null" to a number.
Since the string does not represent a valid number, the conversion fails and results in NaN (Not-a-Number).
The typeof operator confirms that valueInScore is of type number, even though it holds the value NaN.
*/

score = undefined
console.log(typeof score); // Output: undefined

valueInScore= Number(score)
console.log(typeof valueInScore); // Output: number
console.log(valueInScore); // Output: NaN
/*
The Number() function attempts to convert the value undefined to a number.
Since undefined does not represent a valid number, the conversion fails and results in NaN (Not-a-Number).
The typeof operator confirms that valueInScore is of type number, even though it holds the value NaN.
*/

score = true
console.log(typeof score); // Output: boolean

valueInScore= Number(score)
console.log(typeof valueInScore); // Output: number
console.log(valueInScore); // Output: 1
/*
The Number() function attempts to convert the boolean value true to a number.
In JavaScript, true is converted to 1 when using the Number() function.
The typeof operator confirms that valueInScore is of type number, and its value is 1.
*/

/* Summary:
33 -> 33
"33" -> 33
"33abc" -> NaN
null -> 0
undefined -> NaN
true -> 1
false -> 0
*/

// Boolean Conversion

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn); // Output: boolean
console.log(booleanIsLoggedIn); // Output: true
/*
The Boolean() function is used to convert the value of isLoggedIn to a boolean.
Since 1 is a truthy value in JavaScript, the conversion results in true.
The typeof operator confirms that booleanIsLoggedIn is of type boolean, and its value is true.
*/

/* Summary:
0 -> false
1 -> true
"0" -> true
"1" -> true
"" -> false
" " -> true
"abc" -> true
null -> false
undefined -> false
NaN -> false
*/

// String Conversion

let value = 33
let stringValue = String(value)
console.log(typeof stringValue); // Output: string
console.log(stringValue); // Output: "33"
/*
The String() function is used to convert the value of value to a string.
Since value is 33, the conversion results in the string "33".
The typeof operator confirms that stringValue is of type string, and its value is "33".
*/

/* Summary:
33 -> "33"
true -> "true"
false -> "false"
null -> "null"
undefined -> "undefined"
NaN -> "NaN"
*/


// ******************************Operations in JavaScript******************************

console.log(3 + 4); // Output: 7
console.log(2 - 1); // Output: 1
console.log(5 * 6); // Output: 30
console.log(10 / 2); // Output: 5
console.log(10 % 3); // Output: 1
console.log(2 ** 3); // Output: 8

console.log("Hello " + "World"); // Output: "Hello World"
console.log(3 + "4"); // Output: "34"
console.log("5" + 2); // Output: "52"
console.log("1" + 2 + 3); // Output: "123"
console.log(1 + 2 + "3"); // Output: "33"
console.log("5" - 2); // Output: 3
console.log("10" * 2); // Output: 20
console.log("20" / 4); // Output: 5
console.log("10" % 3); // Output: 1
console.log("2" ** 3); // Output: 8
/*
In JavaScript, when performing operations between different data types, type coercion occurs.
When using the + operator with a string and a number, JavaScript converts the number to a string and concatenates them.
For example, 3 + "4" results in "34" because 3 is converted to "3" and then concatenated with "4".
Similarly, "5" + 2 results in "52" because 2 is converted to "2" and then concatenated with "5".

However, when using other arithmetic operators like -, *, /, %, and ** with a string and a number,
 JavaScript attempts to convert the string to a number.
For example, "5" - 2 results in 3 because "5" is converted to the number 5 before the subtraction operation.
Similarly, "10" * 2 results in 20 because "10" is converted to the number 10 before the multiplication operation.

It is so because JavaScript follows specific rules for type coercion,
 and the behavior can vary based on the operator used and the types of operands involved.
*/




