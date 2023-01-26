/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    words.forEach(function(word) {
        for (let idx = 0, len = word.length; idx < len; idx ++) {
            let char = word[idx];
            if (allowed.indexOf(char) < 0) {
                return false;
            }
        }
        count ++;
    });
    return count;
};