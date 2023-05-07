/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let answer = [];
    function isPalindrome(str) {
        let left = 0, right = str.length-1;
        while (left < right) {
            if(str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    var traverse = function(str, arr) {
        if (!str.length) {
            answer.push(arr);
            return true;
        }
        for (let i = 1, len = str.length; i <= len; i ++) {
            var subStr = str.slice(0, i);
            if (isPalindrome(subStr)) {
                var restStr = str.slice(i);
                traverse(restStr, [...arr, subStr])
            }
        }
    }
    traverse(s, []);
    return answer;
};