console.log(2>1); // true
console.log(2<1); // false
console.log(2>=1); // true
console.log(2<=1); // false
console.log(2==1); // false
console.log(2!=1); // true
console.log(2===1); // false
console.log(2!==1); // true

console.log("2" == 2); // true
console.log("2" === 2); // false
/*
The == operator performs type coercion, so it converts the string "2" to the number 2 before comparing, resulting in true. 
The === operator does not perform type coercion, instead performs a strict comparison.
    So it compares both value and type, resulting in false since one is a string and the other is a number.
*/

//Bad Comparisons
console.log("2"==2); // true
console.log("2"===2); // false
console.log("2"!=2); // false
console.log("2"!==2); // true

console.log("2">1); // true
console.log("2"<1); // false
console.log("02">1); // true
/*
JavaScript converts the string to a number for the comparison operators, so "2" is converted to 2 and "02" is also converted to 2.
*/

console.log(null>0); // false
console.log(null<0); // false
console.log(null==0); // false
console.log(null>=0); // true
console.log(null<=0); // true
/*
The reason is that an equality check == and comparison operators >, <, >=, <= work differently.
When comparing null with a number, JavaScript converts null to 0 for the comparison operators, but not for the equality operator.
Therefore, null is considered equal to 0 when using >= and <=, but not when using ==.
*/

console.log(undefined>0); // false
console.log(undefined<0); // false
console.log(undefined==0); // false
console.log(undefined>=0); // false
console.log(undefined<=0); // false
/*
When comparing undefined with a number, JavaScript does not convert undefined to a number for any of the comparison operators or the equality operator. 
Therefore, undefined is not considered equal to 0, and all comparisons with undefined return false.
*/