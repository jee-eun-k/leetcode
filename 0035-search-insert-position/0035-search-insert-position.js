/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const len = nums.length;
    for (let idx = 0; idx < len; idx ++) {
        if (target <= nums[idx]) {
            return idx;
        }
    }
    return len;    
};