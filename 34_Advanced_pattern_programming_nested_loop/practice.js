let prompt = require('prompt-sync')()
let n = prompt('Enter a number : ')

for(let i = 1;i<=n;i++){
    let temp = 65;
    for(let j = 1;j<=i;j++){
        process.stdout.write(String.fromCharCode(temp) + ' ')
        temp++
    }
    console.log()
}

// A - 65, B - 66, C - 67
// a - 97, b - 98, c - 99

// Mirror right angled trangle -- combination of inverted right angled triangle and right angled triangle pattern