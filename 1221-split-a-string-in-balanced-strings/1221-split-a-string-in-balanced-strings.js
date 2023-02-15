/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let answer = 0;
    s = s.split('');
    let tempArr = [];
    while (s.length) {
        if (s[0] === tempArr[tempArr.length - 1] || !tempArr.length) {
            tempArr.push(s.shift());
        } else {
            tempArr.pop();
            s.shift();
        }
        if (!tempArr.length) {
            answer ++;
        }
    }
    return answer;
};