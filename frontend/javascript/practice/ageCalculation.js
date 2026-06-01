const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your year of birth: ", (yearOfBirth) => {

    if (yearOfBirth.trim() === "") {
        console.log("Please enter a valid year of birth.");
    } else {
        console.log(`You are ${calculateAge(Number(yearOfBirth))} years old.`);
    }

    rl.close();
});

function calculateAge(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth;
}
