/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (true) {
        num = num.toString().split('');
        if (num.length === 1) {
            return num[0];
        }
        num = num.reduce((a, b) => {return a + Number(b)}, 0);
    }
};