var kidsWithCandies = function(candies, extraCandies) {
    let max = candies[0];
    for(let i in candies) { 
        max = Math.max(candies[i], max);
    }
    return candies.map((candy) => { 
        if(candy + extraCandies >= max) return true;
        return false;
    });
};