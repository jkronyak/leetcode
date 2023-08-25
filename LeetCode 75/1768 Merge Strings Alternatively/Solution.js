var mergeAlternately = function(word1, word2) {

    const long = Math.max(word1.length, word2.length);
    let ans = "";

    for(let i = 0; i < long; i++) { 
        if(i < word1.length) ans += word1[i];
        if(i < word2.length) ans += word2[i];
    }    

    return ans;
};