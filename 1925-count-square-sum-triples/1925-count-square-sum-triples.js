/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let answer = 0;
    for (let i = 1; i <= n; i ++) {
        for (let j = 1; j <= n; j ++) {
            for (let k = 1; k <= n; k ++) {
                if (Math.pow(i, 2) + Math.pow(j, 2) - Math.pow(k, 2) === 0) {
                    answer ++;
                }
            }
        }
    }
    return answer;
    
};