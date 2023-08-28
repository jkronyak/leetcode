/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    
    let max = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // Calculate first window.
    let window = s.slice(0, k);
    let curV = 0;

    for(let i = 0; i < window.length; i++) { 
        if(vowels.includes(window[i])) curV++;
    }

    max = curV;

    for(let i = 0; i < s.length - k + 1; i++) {

        if(curV > max) max = curV;

        if(vowels.includes(s[i])) {
            curV--;
        }
        if(vowels.includes(s[i + k])) {
            curV++;
        }

        window = s.slice(i + 1, i + k + 1);
    }

    return max;
};