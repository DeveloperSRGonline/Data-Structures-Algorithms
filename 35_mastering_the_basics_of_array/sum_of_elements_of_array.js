
let prompt = require('prompt-sync')()
let size = Number(prompt('Enter arrays size : '))
let arr = new Array(size)
let sum = 0;
for(let i = 0;i< arr.length;i++){
    arr[i] = Number(prompt('Enter element : '))
    sum = sum + arr[i];
}
console.log("array is : " + arr)
console.log("sum is : " + sum)