/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let maxA = 0; 

    let l = 0;
    let r = height.length - 1;

    while(l < r)  { 
        let curA = (r - l) * Math.min(height[l], height[r]);
        if(curA > maxA) maxA = curA; 

        if(height[l] > height[r]) r--;
        else l++;
    }

    return maxA;
};