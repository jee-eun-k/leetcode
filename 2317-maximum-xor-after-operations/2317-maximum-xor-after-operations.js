/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumXOR = function(nums) {
  let answer = nums.reduce(
    function(accumulator, currentValue) {
      console.log(accumulator, currentValue)
      return accumulator |= currentValue;
    }, 
  0);

  return answer;    
};