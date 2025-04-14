// with extra space
// let arr = [1,2,3,4,5,6]
// let temp = new Array(arr.length)
// let i = 0;
// for(let j = arr.length-1;j>=0;j--){
//     temp[i] = arr[j]
//     i++;
// }
// console.log(temp)


//without extra space (two pointer algorithm)

let arr = [1,2,3,4,5,6]
let i = 0; j = arr.length-1

while(i<j){
    let temp = arr[i]
    arr[i]  =  arr[j]
    arr[j] = temp
    i++
    j--
}
console.log(arr)