let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a number : '))
// factorial of a number
// 5 - 5*4*3*2*1 = 120
//fact "0" nahi rakh sakte kyo ki zero rakhenge toh multiply karne ke baad factorial zero ho jayega ye hame nahi chahiye
let fact = 1; 
for(let i = 1; i <= n; i++){
    fact = fact * i;
}
console.log(fact)