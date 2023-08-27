/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let obj = {};
    let result = [];

    for(let i = 0; i < nums.length; i++) { 
        let complement = target - nums[i];
        if(obj[complement] !== undefined && obj[complement] != i) { 
            result = [i, obj[complement]];
        }
        obj[nums[i]] = i;
    }

    return result;
}