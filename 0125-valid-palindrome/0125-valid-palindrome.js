/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let len = s.length;
    let isOdd = len % 2;
    let left = 0, right = len - 1;
    while ((right - left) > (isOdd)) {
        console.log(left, right)
        if (s[left] !== s[right]) {
            return false;
        } else {
            left ++;
            right --;
        }
    }
    return true;
};