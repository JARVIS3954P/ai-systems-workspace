const customerId = 1
/*
The const keyword is used to declare a variable that cannot be reassigned later in the code.
Meaning that once a value is assigned to a variable declared with const, it cannot be changed or reassigned to a new value.
*/

let customerEmail = "vaibhav@anand.com"
/*
let is used to declare a variable that can be reassigned later in the code.
In this case, we are declaring a variable named customerEmail and assigning it the value.
A variable without any value is treated as undefined in JavaScript.
So, if we declare a variable without assigning it a value, it will have the value of undefined.
*/
var customerCity = "Lucknow"
/*
Earlier JS had no control over block scope, which made variables declared with var accessible outside of the block they were defined in.
With the introduction of let and const, developers can now declare variables that are block-scoped, meaning they are only accessible within the block they were defined in.
So, now it is not recommended to use "var" for variable declaration, as it can lead to unintended consequences and bugs in the code.
Instead, it is recommended to use "let" and "const" for better control over variable scope and immutability.
*/


customerPassword = "vaibhav123"
/*
This reserves memory for the variable customerId and assigns it the value 1.
The const keyword indicates that the value of customerId cannot be changed once it is assigned.
If we try to reassign a new value to customerId, it will throw an error.
*/

//customerId = 2;
/*
This will throw an error because customerId is declared with const, and its value cannot be reassigned.
*/

customerEmail = "v@anand.com" // This is valid because customerEmail is declared with let, which allows reassignment.
customerCity = "Kanpur" // This is valid because customerCity is declared with let, which allows reassignment.
customerPassword = "v123" // This is valid because customerPassword is declared with let, which allows reassignment.


// To print one variable, we can use console.log() method as shown below:
console.log(customerId);
/*
console.log() method is used to print the value of customerId to the console.
*/

// To print multiple variables in a tabular format, we can use console.table() method as shown below:
console.table([ customerEmail, customerCity, customerPassword ]);
/*
console.table() method is used to display data in a tabular format in the console. It takes an array of data and displays it as a table.
In this case, we are passing an array containing the variables customerId, customerEmail, customerCity, and customerPassword to the console.table() method
 which will display their values in a tabular format in the console.
*/