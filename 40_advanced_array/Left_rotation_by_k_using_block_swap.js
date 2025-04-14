let arr = [1, 2, 3, 4, 5];
let k = Number(prompt('Enter value of k'))
k = k % arr.length

reverse(arr,0,k-1)
reverse(arr,k,arr.length-1)
reverse(arr,0,arr.length-1)

function reverse(arr,i,j){
    while(i<j){ // ye swapping ke liye use hoga
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
        i++
        j--
    }
}