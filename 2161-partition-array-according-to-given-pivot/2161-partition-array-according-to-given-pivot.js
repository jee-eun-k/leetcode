/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let smallArr = [], equalArr = [], greaterArr = [];
    for (let i = 0, len = nums.length; i < len; i ++) {
        let elem = nums[i];
        if (elem > pivot) {
            greaterArr.push(elem);
        } else if (elem < pivot) {
            smallArr.push(elem);
        } else {
            equalArr.push(elem);
        }
        
    }
    return [smallArr, equalArr, greaterArr].flat();
};