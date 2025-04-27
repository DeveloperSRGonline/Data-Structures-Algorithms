// printing factorial of a number
// function temp(n){
//     if(n==1) return 1
//     return n * temp(n-1)
// }
// console.log(temp(5))  

// let sum = 0;
// for(let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log(sum)

function sumOfDigits(n){
    if(n==1) return 1;
    return n + sumOfDigits(n-1)
}
console.log(sumOfDigits(5))