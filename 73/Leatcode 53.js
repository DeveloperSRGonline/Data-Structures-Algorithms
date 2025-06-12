let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function maxSubArray(nums) {
    let sum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let newsum = sum + nums[i];
        if (nums[i] > newsum){
            sum = nums[i]
        }else{
            sum = newsum;
        }
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

console.log(maxSubArray(arr)); // Output: 6
// Explanation: The maximum subarray is [4, -1, 2, 1] with a sum of 6.
// Time Complexity: O(n)
// Space Complexity: O(1)
