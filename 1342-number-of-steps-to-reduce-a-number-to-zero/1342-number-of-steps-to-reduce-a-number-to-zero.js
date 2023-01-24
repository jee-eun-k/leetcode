/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num, answer = 0) {
    if (!num) {
      return answer;
    }
    return numberOfSteps((num % 2 ? num - 1 : num / 2), ++ answer);
};