/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = 0;
    let index = 50;
    while (index--) {
        n = n.toString().split('').reduce((accum, curr) => {
            return accum + Math.pow(curr, 2);
        }, 0);
        if (n === 1) {
            return true;
        }
    }
    return false;
};