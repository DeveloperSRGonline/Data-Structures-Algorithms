let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a number : '))
// print the sum of all even and and odd in range seperately.

let evenSum = 0, oddSum = 0;
for(let i = 1; i <= n; i++){
    if(i % 2 == 0){
        evenSum = evenSum + i; 
    }else{
        oddSum = oddSum + i;
    }
}
console.log('Even sum : ',evenSum)
console.log('odd sum : ',oddSum)