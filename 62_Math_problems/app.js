let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a number : '))
checkRangeInPrime(n)

function checkRangeInPrime(n){
    let isPrime = new Array(n+1).fill(true)
    for(let i = 2;i<= Math.floor(Math.sqrt(n+1));i++){
        if(isPrime[i] == true){
            for(let j = i*i;j<=n;j+=i){
                isPrime[j] = false;
            }
        }
    }
    for(let i=2;i<isPrime.length;i++){
        if(isPrime[i] == true){
            process.stdout.write(i + " ");
        }
    }
}

var a = 12;
