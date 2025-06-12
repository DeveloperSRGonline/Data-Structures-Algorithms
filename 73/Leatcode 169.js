let arr = [2,2,1,1,1,2,2]

function majorityElement(nums){
    let count = 0;
    let ans = nums[0]
    for(let i = 1; i< nums.length;i++){
        if(count === 0){
            ans = nums[i]
            count = 1;
        }else if(ans !== nums[i]){
            count--;
        }else{
            count++;
        }
    }
    return ans;
}
console.log(majorityElement(arr)); // Output: 2
// Explanation: The function uses the Boyer-Moore Voting Algorithm to find the majority element in the array.
// The majority element is the element that appears more than n/2 times in the array.
// In this case, the majority element is 2, which appears 4 times in the array.
// Time Complexity: O(n)
// Space Complexity: O(1)