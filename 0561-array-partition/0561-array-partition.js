/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums.sort((a, b) => {return a - b;}).reduce((accum, curr, idx) => {
        return (idx % 2 === 0) ? (accum + curr) : accum;
    }, 0);
};