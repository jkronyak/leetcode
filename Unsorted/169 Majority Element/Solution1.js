/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++) { 
        if(map[nums[i]] === undefined) { 
            map[nums[i]] = 1;
        } else { 
            map[nums[i]] = map[nums[i]] + 1;
        }
    }
    let maj = Math.floor(nums.length / 2);
    for(let i = 0; i < Object.values(map).length; i++) { 
        if(Object.values(map)[i] > maj) { 
            return Object.keys(map)[i];
        }
    }
};