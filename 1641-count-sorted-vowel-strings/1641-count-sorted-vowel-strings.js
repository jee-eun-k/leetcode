/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let answer = 0;
    let memo = [];
    for (let idx = 0; idx < n; idx ++) {
        let temp = [];
        for (let i = 0; i < 5; i ++) {
            temp[i] = !idx || !i ? 1 : (temp[i - 1] + memo[idx - 1][i]);
            if (idx === n - 1) {
                answer += temp[i];
            }
        }
        memo.push(temp);
    }
    return answer;
};