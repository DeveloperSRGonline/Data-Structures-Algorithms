let prompt = require('prompt-sync')()
let n = prompt('Enter a number : ')

for(let i = 1;i<=n;i++){// row  banayega
    for(let j = 1;j<=n-i;j++){
        process.stdout.write("  ") // ye spaces ko print karne ke loop chalega(for inverted right triangle)
    }
    for(let j = 1;j<=i;j++){
        process.stdout.write('* ') // ye starts print karne ke liye loop chalega(for normak right angle triangle)
    }
    console.log()// for next line
}
