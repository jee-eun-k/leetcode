/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let answer = start;
    let index = 2;
    while (index <= n) {
        let temp = (start + 2 * (index - 1));
        answer ^= temp;
        index ++;
    }
    return answer;
    
};