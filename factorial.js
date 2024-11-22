// Importing readline module for user input
const readline = require('readline');

// Setting up the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate factorial
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}

// Prompting user for input
rl.question("Enter a number to calculate its factorial: ", (input) => {
    const number = parseInt(input, 10); // Convert input to an integer

    if (isNaN(number)) {
        console.log("Please enter a valid number.");
    } else {
        console.log(`The factorial of ${number} is: ${factorial(number)}`);
    }

    rl.close(); // Close the readline interface
});
