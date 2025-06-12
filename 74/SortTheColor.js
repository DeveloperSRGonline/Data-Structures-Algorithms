let nums = [2, 0, 2, 1, 1, 0];
function sortColors(nums){
    let i = 0,j = 0 , k = nums.length - 1;
    while(i <= k){
        if(nums[i] === 0){
            [nums[i],nums[j]] = [nums[j],nums[i]]
            i++;
            j++;
        }else if(nums[i] === 2){
            [nums[i],nums[k]] = [nums[k],nums[i]]
            k--;
        }else i++;
    }
    return nums;
}

console.log(sortColors(nums)); // Output: [0, 0, 1, 1, 2, 2]
// Explanation: The function sorts the array in-place using a three-pointer approach.
// The first pointer (i) traverses the array, the second pointer (j) tracks the position of the last 0, and the third pointer (k) tracks the position of the last 2.
// Time Complexity: O(n), where n is the length of the input array.
// Space Complexity: O(1), as the sorting is done in-place without using any additional data structures.