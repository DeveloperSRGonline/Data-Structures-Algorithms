const prompt = require("prompt-sync")();
// jaha prompt likhe ho vaha aap kuchh bhi naam de sakte ho (eg.adrak , lasan)
let n = prompt('Enter a number: ')
let temp = n;
for(let i=1; i<=n; i++){
    for(let j=1; j<=n-i+1; j++){
        process.stdout.write('* ')
    }
    console.log();
}
// i = 2;
// n - i + 1;
// 5 - 2 + 1  = 4 
// const prompt = require("prompt-sync")();
// // jaha prompt likhe ho vaha aap kuchh bhi naam de sakte ho (eg.adrak , lasan)
// let n = prompt('Enter a number: ')
 
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         process.stdout.write('* ')
//     }
//     console.log();
// }
