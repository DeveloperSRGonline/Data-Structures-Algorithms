let prompt = require('prompt-sync')()
let n = prompt('Enter a number : ')

for(let i = 1;i<=n;i++){// row  banayega
    for(let j = 1;j<=n-i;j++){
        process.stdout.write(" ")
    }
    for(let j = 1;j<=i;j++){
        process.stdout.write('* ')
    }
    console.log()// for next line
}