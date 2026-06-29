const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num)=> num>4)
//console.log(newNums)

// for-each doesn't return any value, but filter do return


/*
const newNums = myNums.filter( (num)=> {
    return num>4 //This will not return any value until explicitly asked to return, as it is inside a block
})
    */

//doing via for-each
const newNums = []

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums)

/************Map*****************/
const myNumbers = [1,2,3,4,5]

// const newNumbers = myNumbers.map((num)=> {return num * 10})
// console.log(newNumbers)

// Chaining of Methods

const newNumbers = myNumbers
                    .map((num)=> num * 10)
                    .map((num) => num + 1)
                    .filter((num)=>num>=30)
//console.log(newNumbers)

/**********************Reduce*********************/
//Use to calculate running sum of an array

const bills = [199,150,234,579,85]

const myTotal = bills.reduce(function (acc, currval){
    //console.log(`Accumulator = ${acc}, Current Value = ${currval}`)
    return acc+currval
},0) // 0 is the initial value of accumulator, can be anything

//console.log(`Total Billing Amount = $${myTotal}`)

// Doing via Arrow function

const total = bills.reduce( (acc, currval) => acc+currval , 0)
//console.log(`Total Billing Amount = $${myTotal}`)