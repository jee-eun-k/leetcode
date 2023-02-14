/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    return num.toString().split('').sort()
        .reduce((a, b, c) => {
            return Number(a) + Number(c > 1 ? b : b * 10)
        }, 0);
};