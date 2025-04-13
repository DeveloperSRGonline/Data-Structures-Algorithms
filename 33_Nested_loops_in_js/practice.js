let prompt = require('prompt-sync')()
let m = prompt('Enter a number of rows : ')
let n = prompt('Enter a number of column : ')

for(let i = 1;i<=m;i++){// control rows
    for(let j = 1;j<=n;j++){ // control column
        // loop ke andar variable har baar initialize/declare hota hai
            process.stdout.write('* ')
    }
    console.log()// ye yaha par new line lane ka kaam kar raha hai
}
// ye hum man sakte hai ki "i" jo hai vo rows ko control karta hai and jo "j" hai vo column ko control karta hai
// loop andar aayega and jab tak andar ka loop completely khatam nahi ho jata hai tab tak pahele wale loop me i++ i.e increment nahi hoga and jab tak inner loop khatam nahi ho jata tab  tak hum inner loop se bahar nahi aayenge  

// jab jab outer loop ek baar chal raha hai tab tab inner wala ek complete loop chal raha hoga