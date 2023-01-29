/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  let answer = [first];
  console.log('answer', answer)
  for (let idx = 1, len = encoded.length; idx <= len; idx ++) {
    answer.push(encoded[idx - 1] ^ answer[idx - 1]);
    
  }
  return answer;
};