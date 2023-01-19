/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let memoArr = [];
    for (let idx = 0; idx <= n; idx ++) {
        var temp = 0;
        if (idx < 2) {
            memoArr[idx] = idx;
        } else {
            memoArr[idx] = memoArr[idx - 1] + memoArr[idx - 2];
        }
    }
    return memoArr[n];
};