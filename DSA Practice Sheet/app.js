let prompt = require('prompt-sync')()
let x = Number(prompt("Enter a Number : "))
let digits = x.toString().split('')
let digitsum = 0;

for(let i = 0;i<digits.length;i++){
    digitsum += Number(digits[i])
}

let isHarshad = x % digitsum == 0;

console.log(isHarshad)