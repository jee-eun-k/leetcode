/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  let answer = [];
  for (let idx = 0, len = s.length; idx < len; idx ++) {
    let char = s[idx];
    if (!answer.length) {
      answer.push(char);
    } else {
      console.log(answer[answer.length - 1], char)
      if (Math.abs(answer[answer.length - 1].charCodeAt(0) - char.charCodeAt(0)) == 32) {
        answer.pop();
      } else {
        answer.push(char);
      }
    }
  }
  return answer.join('');
};