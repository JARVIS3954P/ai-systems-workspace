// for-of

const numbers = [1,2,3,4,5]
for(const num of numbers){
    //console.log(num)
}

// Output : 1 2 3 4 5
// If of->in, output : 0 1 2 3 4, because array are also treated as obj in JS and their indices are their properties/keys,
// so to print the actual value use numbers[num]

/*************Maps**********************/
//Holds unique values in order
const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('FR',"France")

//console.log(map)
/*Output
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
}
*/


for (const [key, value] of map) { //Destructuring the map
    //console.log(`${key} : ${value}`)
}
/*Output
IN : India
USA : United States of America
FR : France
*/


for(const key of map){
    //console.log(key)
}
/*
Output:
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ]
*/

/***************for In**************************/
//Since Objects are non-iterable, here we use for-in loops

const myObject ={
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift'
}
for (const key in myObject) {    
    //console.log(`${key} is abbreviation for ${myObject[key]}`)
}
/*Output
js is abbreviation for Javascript
cpp is abbreviation for C++
rb is abbreviation for Ruby
swift is abbreviation for Swift
*/

/***************for each loop************************/
// this loop comes pre-injected into the array, as a prototype

const coding = ["js","ruby","java","python","cpp"]

//this loop uses call back function as its parameter
coding.forEach(function (val){
    //console.log(val);
})


// using arrow function as the parameter
coding.forEach((item) => {
//     console.log(item);
})

function printMe(item){
    //console.log(item);
}
coding.forEach(printMe) //passing just as a reference, not as execute

//Other parameters in the call back function
coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr)
})

//using for each in array of objects

const myCoding = [
    {
        abbr : 'js',
        language : 'javascript'
    },
    {
        abbr : 'py',
        language : 'python'
    },
    {
        abbr : 'cpp',
        language : 'C++'
    }
]

myCoding.forEach( (item) =>{
    console.log(`${item.abbr} says ${item.language}`)
})