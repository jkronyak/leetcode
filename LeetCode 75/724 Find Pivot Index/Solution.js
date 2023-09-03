/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let rSum = nums.reduce((a, b) => a + b);
    let lSum = 0;

    for(let i = 0; i < nums.length; i++) {
        rSum -= nums[i];
        if(lSum === rSum) return i;
        lSum += nums[i];
    }
    return -1;
};