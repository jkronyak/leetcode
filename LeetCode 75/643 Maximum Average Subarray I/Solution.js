/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let maxSum = 0;

	// Initial window
    for(let i = 0; i < k; i++) { 
        maxSum += nums[i];
    }
    
    let curSum = maxSum;
	// For each iteration, subtract the first element
	// and add the next element to the sum. 
	// Check if the new sum is bigger.
    for(let i = 0; i < nums.length; i++) {

        curSum = curSum - nums[i] + nums[i + k];
        if(maxSum < curSum) maxSum = curSum;
    }
    
    return maxSum / k;
};