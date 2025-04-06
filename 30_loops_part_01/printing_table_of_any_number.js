let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a number : '))

for(let i = 1; i<=10; i++){
    console.log(n + " * " + i + " = " + (n*i)) 
}