// ******************************Conversion Operations in JavaScript******************************


// Number Conversion

let score = 33
console.log(typeof score); // Output: number

let valueInScore = Number(score)
console.log(typeof valueInScore); // Output: number
/*
The Number() function is used to convert the value of score to a number.
Since score is already a number, the conversion does not change its type or value.
The typeof operator confirms that valueInScore is of type number.
*/

score = "33abc"
console.log(typeof score); // Output: string

valueInScore = Number(score)
console.log(typeof valueInScore); // Output: number
console.log(valueInScore); // Output: NaN
/*
The Number() function attempts to convert the string "33abc" to a number.
Since the string contains non-numeric characters, the conversion fails and results in NaN (Not-a-Number).
The typeof operator confirms that valueInScore is of type number, even though it holds the value NaN.
*/

score = null
console.log(typeof score); // Output: object

valueInScore = Number(score)
console.log(typeof valueInScore); // Output: number
console.log(valueInScore); // Output: 0
/*
The Number() function converts null to a number.

In JavaScript, null is explicitly converted to 0.

Therefore:
Number(null) // 0

The conversion succeeds and returns 0.

Note:
typeof null returns "object".
This is a historical bug in JavaScript that has been preserved for backward compatibility.
*/

score = undefined
console.log(typeof score); // Output: undefined

valueInScore = Number(score)
console.log(typeof valueInScore); // Output: number
console.log(valueInScore); // Output: NaN
/*
The Number() function attempts to convert the value undefined to a number.
Since undefined does not represent a valid number, the conversion fails and results in NaN (Not-a-Number).
The typeof operator confirms that valueInScore is of type number, even though it holds the value NaN.
*/

score = true
console.log(typeof score); // Output: boolean

valueInScore = Number(score)
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
"" -> 0
" " -> 0
null -> 0
undefined -> NaN
true -> 1
false -> 0

Additional Examples:
Number([]) -> 0
Number([1]) -> 1
Number([1,2]) -> NaN

parseInt("33abc") -> 33
Number("33abc") -> NaN
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

Additional Examples:
[] -> true
{} -> true
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
In JavaScript, when performing operations between different data types,
type coercion may occur.

When using the + operator with a string and a number,
JavaScript converts the number to a string and performs concatenation.

Examples:
3 + "4" -> "34"
"5" + 2 -> "52"
"1" + 2 + 3 -> "123"

Evaluation occurs from left to right.

Example:
1 + 2 + "3"
=> 3 + "3"
=> "33"

For arithmetic operators such as -, *, /, %, and **,
JavaScript performs numeric coercion.

Examples:
"5" - 2 -> 3
"10" * 2 -> 20
"20" / 4 -> 5
"2" ** 3 -> 8

The operands are converted to numbers before the operation is performed.

JavaScript follows specific coercion rules,
and the behavior varies depending on the operator and operand types involved.
*/