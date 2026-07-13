/* The Promise,
object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:
    (i)   pending: initial state, neither fulfilled nor rejected.
    (ii)  fulfilled: meaning that the operation was completed successfully.
    (iii) rejected: meaning that the operation failed.
*/

// create an instance of Promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // executes only when the task is completed, and then links this promise to consumption
    }, 500)
})
// consume that promise
promiseOne.then(function(){
    console.log("Promise Consumed")
})

/*********************************** Creating and consuming without storing in variable*****************************/
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Aync 2 resolved")
})

/********************************** Promises can also return values, which can be linked to .then() using resolve ****************/
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"chai@example.com"})
    },1500)
})
promiseThree.then(function(user){
    console.log(user)
})

/**************************************** Reject, and error handling using .catch() *************************************/
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"John Doe", email:"john@example.com"});
            
        } else {
            reject("Error: Something went wrong")
        }
    },2000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("Promise is either resolved or rejected, and this is the final block"))

/****************Using async/await****************/
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", email: "javascript@example.com"});
        } else {
            reject("Error: Something went wrong");
        }
    }, 2500);
});

// It waits for the promise to resolve or reject, and then returns the value or throws an error.
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()