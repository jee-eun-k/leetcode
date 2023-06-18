/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let temp = [...Array(nums.length + 1).fill(-1)]
    while (nums.length) {
        let num = nums.pop();
        temp[num] = num;
    }
    return temp.indexOf(-1);
};