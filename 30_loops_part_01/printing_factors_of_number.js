let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a number : '))

// inefficient program
for(let i = 1; i <= n; i++){
    if(n % i == 0) console.log(i)
}

// efficient program
// for(let i = 1; i <= n/2; i++){
//     if(n % i == 0) console.log(i)
// }
// console.log(n)