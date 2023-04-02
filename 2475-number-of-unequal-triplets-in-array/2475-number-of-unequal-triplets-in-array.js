/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let answer = 0;
    let len = nums.length;
    for (let i = 0; i < len - 2; i ++) {
        for (let j = i + 1; j < len; j ++) {
            if (nums[i] !== nums[j]) {
                for (let k = j + 1; k < len; k ++) {
                    if (nums[j] !== nums[k] && nums[i] !== nums[k]) {
                        answer ++;
                    }              
                }            
            }
        }  
    }
    return answer;
};