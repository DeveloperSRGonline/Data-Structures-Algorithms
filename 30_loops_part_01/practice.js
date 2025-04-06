let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a number : '))
//check if number is prime or not

// let isPrime = true;
// if (n < 2) {
//     console.log('check your input value')
// }else{

//     for(let i = 2; i < n/2; i++){
//         if(n % i == 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime) console.log("prime number")
//         else console.log("not prime")
// }


// ek mathematical proof hai ki agar koi number apne square root tak divide nahi ho paya toh vo uske aage bhi nahi ho payega 

// Efficient way 

let isPrime = isPrimeFun();
if(isPrime) console.log('prime number')
else console.log('Not prime')

function isPrimeFun(n){ //17
    if(n<=1) return false;
    if(n==2) return true; 
    if(n % 2 == 0) return false;
    for(let i = 3; i<=Math.floor(Math.sqrt(n));i+=2){
        if( n % i == 0) return false;  
    }
    return true;
}

// platform par problem solve karte time ye use karna hai 
// process.stdout.write()