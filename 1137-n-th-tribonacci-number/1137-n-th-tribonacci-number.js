/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let memoArray = [0, 1, 1];
    for (let idx = 3; idx <= n; idx ++) {
        memoArray[idx] =  memoArray[idx - 3] + memoArray[idx - 2] + memoArray[idx - 1]; 
    }
    return memoArray[n];
};