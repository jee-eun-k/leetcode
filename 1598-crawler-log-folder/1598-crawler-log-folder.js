/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let answer = 0;
  for (let idx = 0, len = logs.length; idx < len; idx ++) {
    let log = logs[idx];
    switch (log) {
      case '../':
        answer += (!answer ? 0 : -1);
        break;
      case './':
        break;
      default:
        answer ++;
        break;
    }
  }
  return answer; 
};