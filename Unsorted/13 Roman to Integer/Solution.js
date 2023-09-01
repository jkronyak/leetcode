/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let numeralMapping = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let sum = 0;
    let i = s.length - 1;

    while( i >= 0 ) { 
        let cur = numeralMapping[s[i]];
        let next = numeralMapping[s[i - 1]];
        if(i >= 1 && cur > next) {
            sum += cur - next;
            i -= 2;
        } else {
            sum += cur;
            i -= 1;
        }
    }
    return sum;

};