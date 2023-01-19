/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memoArray = [0, 1, 2, 3];
    for (let idx = 4; idx <= n; idx ++) {
        memoArray[idx] = memoArray[idx - 1] + memoArray[idx - 2];
    }
    return memoArray[n];
};