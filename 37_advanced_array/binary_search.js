// Binary search - it demands -- array should be sorted 

let prompt = require('prompt-sync')()
let arr = [2,5,7,9,12,34,56,64,82,100,120]
let n = prompt('Enter element : ')
if(binarySearch(arr,n) == -1) console.log('not found');
else console.log('Element found');



function binarySearch(arr,target){
    let s = 0 , e = arr.length-1;
    while(s<=e){
        let mid = Math.floor((s + e) / 2);
        if(arr[mid] == target) return mid;
        else if (arr[mid] > target) e = mid - 1;
        else s = mid + 1;
    }
    return -1;
}