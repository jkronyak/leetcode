/**
 * @note This solution is slow.
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    const vowels = ['a', 'e','i', 'o','u'];

    let l = 0;
    let r = s.length - 1;

    let lSwap = "";
    let rSwap = "";

    while(l < r) {

        if(lSwap !== "" && rSwap !== "") {

            let leftSeg = s.slice(0, l);
            leftSeg += rSwap;

            let middleSeg = s.slice(l + 1, r);

            let rightSeg = lSwap;
            rightSeg += s.slice(r + 1, s.length);

            s = leftSeg + middleSeg + rightSeg;

            l++;
            r--;

            lSwap = "";
            rSwap ="";
        }

        if(vowels.includes(s[l].toLowerCase())) { 
            lSwap = s[l];
        } else {
            l++;
        }

        if(vowels.includes(s[r].toLowerCase())) { 
            rSwap = s[r];
        } else { 
            r--;
        }
    }

    return s;
};