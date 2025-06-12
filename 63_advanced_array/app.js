let arr1 = [2, 4, 5];
let arr2 = [1, 4, 7,10,15];

let ans = new Array(arr1.length + arr2.length)// merged array jo ki sorted bhi hai
let i = 0, j = 0 , k = 0;

// isme loop ja raha hai yahe dono i and j pointer length hai 
while (i<arr1.length && j<arr2.length){
    if(arr1[i] < arr2[j]){
        ans[k++] = arr1[i++];
    }else{
        ans[k++] = arr2[j++];
    }
}
// par agar is loop me ja raha hai yane j pointer length se bahar chala gaya hai 
while(i<arr1.length){
    ans[k++] = arr1[i++];
}
// and agar is loop me ja raha hai yane i pointer length se bahar chala gaya hai 
while(j<arr2.length){
    ans[k++] = arr2[j++];
}

console.log(ans);// Output: [1, 2, 4, 4, 5, 7]
// Time complexity : O(n + m)
// Space complexity : O(n + m)
    