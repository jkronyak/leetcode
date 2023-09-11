/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

    let only1 = new Set();
    let only2 = new Set();

    let hasSeen1 =  new Set();
    let hasSeen2 = new Set();

    for(let i = 0; i < nums1.length; i++) { 
        hasSeen1.add(nums1[i]);
    }

    for(let i = 0; i < nums2.length; i++) { 
        hasSeen2.add(nums2[i]);
    }

    for(let i = 0; i < nums1.length; i++) { 
        if( !hasSeen2.has(nums1[i]) ) {
            only1.add(nums1[i]);
        }
    }

        for(let i = 0; i < nums2.length; i++) { 
        if( !hasSeen1.has(nums2[i]) ) {
            only2.add(nums2[i]);
        }
    }
    return [[...only1], [...only2]];
};