/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var memo = [Array.from({length: n}, (_, i) => 1)];
    for (let i = 1; i <= m; i ++) {
        let tempArr = [1];
        let prevArr = memo[i - 1];
        for (let j = 1; j < n; j ++) {
            tempArr.push(tempArr[j - 1] + prevArr[j]); 
        }
        memo.push(tempArr);
    }
    return memo[m - 1][n - 1];
};