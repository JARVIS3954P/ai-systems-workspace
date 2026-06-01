const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {

    if (name.trim() === "") {
        console.log("Please enter a valid name.");
    } else {
        console.log(returnInitials(name));
    }

    rl.close();
});

function returnInitials(name) {
    let nameParts = name.split(" ");
    return nameParts[0];
}