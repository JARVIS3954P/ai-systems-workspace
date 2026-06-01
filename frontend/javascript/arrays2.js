// Arrays in JS can hold any type of data, including mixed types, even another array.
const marvel = ["Iron Man", "Captain America", "Thor"]
const dc = ["Batman", "Superman", "Wonder Woman"]

marvel.push(dc) // We can push an array into another array
console.log(marvel) // Output: [ 'Iron Man', 'Captain America', 'Thor', [ 'Batman', 'Superman', 'Wonder Woman' ] ]

// Accessing the nested array's elements
console.log(marvel[3][0]) // Output: Batman
// Concat method can also be used to merge arrays
const allHeroesConcat = marvel.concat(dc)
console.log(allHeroesConcat) // Output: [ 'Iron Man', 'Captain America', 'Thor', 'Batman', 'Superman', 'Wonder Woman' ]


// We can also use the spread operator to merge arrays (better than concat as it doesn't create a new array)
const allHeroes = [...marvel, ...dc]
console.log(allHeroes) // Output: [ 'Iron Man', 'Captain America', 'Thor', 'Batman', 'Superman', 'Wonder Woman' ]

//Flattening an nested array using flat() method
const nestedArray = [1, 2, [3, 4], [5, 6, [7, 8], 9], 10]
const flattenedArray = nestedArray.flat(3) // The argument specifies the depth level to flatten, choose infinity if not sure about the nesting depth.
console.log(flattenedArray) // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Check for array
console.log(Array.isArray(marvel)) // Output: true
console.log(Array.isArray("Jarvis")) // Output: false

//Converting to array
console.log(Array.from("Jarvis")) // Output: [ 'J', 'a', 'r', 'v', 'i', 's' ]

//Interesting Case
console.log(Array.from({ name : "Jarvis" })) // Output: [] because the object doesn't have a length property, so it can't be converted to an array.


//Using Array.of() to create an array from a list of arguments
const hero1 = "Iron Man"
const hero2 = "Captain America"
const hero3 = "Thor"
console.log(Array.of(hero1, hero2, hero3)) // Output: [ 'Iron Man', 'Captain America', 'Thor' ]