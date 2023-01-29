/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumXOR = function(nums) {
  return nums.reduce(
    function(accumulator, currentValue) {
      return accumulator |= currentValue;
    }, 
  0);

};