/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = { };

    for(let i = 0; i < arr.length; i++) { 
        if(map[arr[i]] === undefined) map[arr[i]] = 1;
        else map[arr[i]] = map[arr[i]] + 1;
    }

    let occSet = new Set(Object.values(map))

    if(Array.from(occSet).length === Object.values(map).length) return true;
    return false;

};