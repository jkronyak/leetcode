/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    
    let hi = n;
    let lo = 1;
    while(lo <= hi) {
        let mi = Number.parseInt(lo + (hi - lo) / 2);
        let g = guess(mi);
        if(g === 0) return mi;
        else if (g === -1) { 
            hi = mi - 1;
        } else { 
            lo = mi + 1;
        }
        
    }
    return -1;

};