let arr = [1,4,5,3,2,9,10]
// so bhaiya ek outer loop hogi jo ki phase ko control karegi
let n = arr.length
for(let i=0;i<n-1;i++){
    for(let j = 0; j<n-i+1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp;
        }
    }
}
console.log(arr)