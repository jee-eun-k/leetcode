/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    var checkDiff = function(elem1, elem2) {
        return elem1 - elem2 === diff;
    }
    let answer = 0;
    let len = nums.length;
    for (let i = 0, iLen = len - 2; i < iLen; i ++) {
        for (let j = i + 1; j < len; j ++) {
            if (checkDiff(nums[j], nums[i])) {
                for (let k = j + 1; k < len; k ++) {
                    if (checkDiff(nums[k], nums[j])) {
                        answer ++;    
                    }
                }
            }
        }
    }
    return answer;
};