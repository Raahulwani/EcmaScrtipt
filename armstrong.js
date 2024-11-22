const readline = require('readline');

const r1 = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

function isArmstrongNumber(num) {
    const digits = num.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc,digit)=> acc + Math.pow(parseInt(digit),power),0);
    return sum === num;
}

r1.question("Enter the number to check is number is armstrong :",(input)=>{
    const number = parseInt(input,10);

    if (isNaN(number)){
        console.log("Please enter a valid number .");
    }else{
        if(isArmstrongNumber(number)){
            console.log(`${number} is an armstrong number`);
        }else{
            console.log(`${number} is not an armstrong number`);
        }
    }
    r1.close();
});