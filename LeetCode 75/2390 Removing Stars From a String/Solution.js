/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let charStack = [];
    for(let i = 0; i < s.length; i++) { 
      if(s[i] !== "*") { 
        charStack.push(s[i]);
      } else { 
        charStack.pop();
      }
    }
    return charStack.join("");
};