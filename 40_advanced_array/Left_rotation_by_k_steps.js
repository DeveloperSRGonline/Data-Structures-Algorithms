// let prompt = require('prompt-sync')()
// let k = Number(prompt('Enter value of k step : '))
// let arr = [1, 2, 3, 4, 5];
// console.log("original array : " + arr)
// k = k % arr.length
// let count = 0;
// for (let j = 1; j <= k; j++){
//    count++
//   let temp = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = temp; 
// }
// console.log("rotated array  : " + arr);
// console.log("rotated " + count + " times")// it show loop how many times runed

// brute force solution 

let prompt = require('prompt-sync')()
let k = Number(prompt('Enter value of k step : '))
let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length)
k = k % arr.length

  for (let i = 0; i < arr.length; i++) {
      temp[i] = arr[(i+k)%arr.length]
  }

console.log(temp);