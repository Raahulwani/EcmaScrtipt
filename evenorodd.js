const readline = require('readline');
 const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

 function checkEvenOdd(number){
    return number % 2 === 0 ? "even" : "odd";
 }
 r1.question("Enter the number to check number is even or odd :",(input)=>{
    const number = parseInt(input, 10);
 
    if (isNaN(number)){
        console.log("Please enter a valid number ");
    }else{
        console.log(`The number ${number} is ${checkEvenOdd(number)}.`);
    }
    r1.close();
 });