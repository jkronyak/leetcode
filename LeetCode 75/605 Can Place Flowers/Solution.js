/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (flowerbed.length === 1 && flowerbed[0] === 0) return true;

    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (
            (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) ||
            (i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) ||
            (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1;
            count++;
        }
    }

    return count >= n;
};