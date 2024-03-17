/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let len = t.length;
    let sIdx = 0, tIdx = 0;
    while (tIdx < len) {
        if (s[sIdx] === t[tIdx]) {
            sIdx ++;
        }
        tIdx ++;
    }
    return s.length === sIdx;
};