const { read } = require('fs');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPallindrom(str){
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

r1.question("Enter a string to check if it's Pallindrm :", (input)=>{
    if(isPallindrom(input)){
        console.log(`"${input}"is pallindrom !`);
    }else{
        console.log(`"${input}"is not pallindrom.`);
    }
    r1.close();
});