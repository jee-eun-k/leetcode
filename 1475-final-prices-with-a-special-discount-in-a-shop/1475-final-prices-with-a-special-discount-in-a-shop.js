/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let answer = [];
    let check = [];
    for (let idx = 0, len = prices.length; idx < len; idx ++) {
        let temp = prices[idx];
        for (let sIdx = 0, sLen = answer.length; sIdx < sLen; sIdx ++) {
            if (!check[sIdx]) {
                if (answer[sIdx] >= temp) {
                    answer[sIdx] -= temp;
                    check[sIdx] = 1;
                }    
            }
        }
        answer.push(temp);
    }
    return answer;
};