// let arr = [10,20,30,40,50]
//         0  1  2  3  4  --> this are index

// arr.push(100)// last mein element rakhta hai 
// arr.unshift(101)// pahele element rakhta hai 

// arr.pop()// last se element nikalta hai
// arr.shift()// suruvat se ek element nikal ta hai
// console.log(arr.length) // length is not method its a property

// home1 home2 home3 home4
// 1     2     3     4


// console.log(arr[0])// 10
// arr[10] = 25 // [10,20,30,40,50,<5 empty items>,25]
// console.log(arr[6]) // undefined


// let a = new Array(4); // yaha par array ka size define kar diya 
// // index 4 to elements 0 se 3 tak hoge

// a[0] = 10
// a[1] = 20
// a[2] = 30
// a[3] = 40
// a[6] = 70
// console.log(a)// [10,20,30,40,<2 empty items>, 70]  
// is se ye prove hota hai ki javascript me static array hota hai kya yaha par dynamic array 


let prompt = require('prompt-sync')()
let size = Number(prompt('Enter arrays size : '))
let arr = new Array(size)
for(let i = 0;i< arr.length;i++){
    arr[i] = Number(prompt('Enter element : '))
}
console.log(arr)