// count of prime kya bolta hai 1 se n ke bich mein kitne prime hai vo print karo
// seive bhai kya bolta hai ki badde ek n + 1 length ka array banalo

// 1 ,2 ,3 ,4,5,6,7,8,9,10,...............
// yaha list mein jo jo prime hai uska toh vo jis jis ka multiple hoga vo prime nahi hoge
// hum condition kya check karenge 2 ---->  sqrt(n) .. agar sqrt tak koi bhi divisible nahi kar paya toh uske aage bhi nahi kar payega 
// and agar divisible hai sqrt tak toh prime nahi hai
// representing index as a number
// Sieve of Eratosthenes
let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a number : '))
checkRangeInPrime(n)
function checkRangeInPrime(n){
    let isprime = new Array(n+1).fill(true)
    for(let i = 2;i <= Math.floor(Math.sqrt(n));i++){
        if(isprime[i] == true){
            for(let j = i*i; j<=n;j+=i){
                isprime[j] = false;
            }
        }
    }
    for(let i = 2; i<isprime.length;i++){
        if(isprime[i]) process.stdout.write(i + " ")
    }
}

