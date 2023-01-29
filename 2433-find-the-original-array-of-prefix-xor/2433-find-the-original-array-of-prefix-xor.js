/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
  let answer = [pref[0]];
  for (let idx = 1, len = pref.length; idx < len; idx ++) {
    answer.push(pref[idx - 1] ^ pref[idx]);
  }
  return answer;
};