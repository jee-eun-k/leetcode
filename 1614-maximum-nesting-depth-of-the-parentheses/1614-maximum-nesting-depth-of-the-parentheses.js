/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let answer = 0;
    let stackLen = 0;
    for (let idx = 0, len = s.length; idx < len; idx ++) {
        let temp = s[idx];
        if (temp === '(') {
            answer ++;
            stackLen = Math.max(stackLen, answer)
        } else if (temp === ')') {
            answer --;
        }
    }
    return stackLen;
};