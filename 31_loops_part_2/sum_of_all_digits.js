// Last se ek digit chahiye ho toh "%" e.g-12%10 --> 2 (kyo ki ye reminder ki value deta hai)
//Last se ek digit hatana hai toh "/" e.g --> 12/10 = 1 (kyo ki ye question deta hai)

// Mod % --> reminder
// divide / --> quotient

// if your dividend is smaller than the diviser in "%" so your answer will be quotient 
// if your dividend is smaller than the diviser in "/" so your answer will be "zero" 
// e.g  2 % 10 = 2

let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a number : '));

let sum = 0;
while (n > 0) {
    let rem = n % 10;
    sum = sum + rem;
    n = Math.floor(n / 10);
}
console.log(sum);