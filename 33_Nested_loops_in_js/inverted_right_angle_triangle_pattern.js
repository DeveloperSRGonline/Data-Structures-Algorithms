let prompt = require('prompt-sync')()
let n = prompt('Enter a number : ')
// let temp = n
// for(let i = 1;i<=n;i++){
//     for(let j = 1;j<=temp;j++){
//         process.stdout.write('* ')
//     }
//     temp--
//     console.log()
// }


//efficient way
let temp = n
for(let i = 1;i<=n;i++){
    for(let j = 1;j<=n-i+1;j++){
        process.stdout.write('* ')
    }
    temp--
    console.log()
}