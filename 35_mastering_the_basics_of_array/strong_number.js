let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a number : '))

let ans = 0;
let copy = n;
while(n>0){
    let dig = n%10
    let fact = 1;
    for(let i = 1;i<=dig;i++){
        fact = fact * i;    
    }
    ans = ans + fact
    n = Math.floor(n/10)
}

if(copy == ans) console.log('Strong Number')
else console.log('no strong number')