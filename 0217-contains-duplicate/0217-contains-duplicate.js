/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    while (nums.length) {
        let num = nums.pop();
        if (nums.indexOf(num) > -1) {
            return true;
        }
    }
    return false;
};