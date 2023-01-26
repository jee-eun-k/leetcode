/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    // var DFS = function(arr) {
    //     var temp = [];
    //     for (let idx = 0, len = arr.length; idx < len; idx ++) {
    //         console.log(arr[idx]);
    //     }
    // };
    // DFS(nums);
    // let len = nums.length + 1;
    // var markArr = Array(len).fill(0);
    // for (let idx = 0; idx < len; idx ++) {
    //     console.log(nums[idx], markArr[idx])
    // }
    let sum = 0;

    var DFS = function(idx, value = 0) {
        if (idx === nums.length) {
            sum += value;
            return true;
        }
        let temp = value;
        //mark[idx + 1] = 0;
        DFS(idx + 1, value);

        temp ^= nums[idx];
        //mark[idx + 1] = nums[idx];
        DFS(idx + 1, temp);
        

    };
    //var markArr = Array(nums.length + 1).fill(0);

    DFS(0);
    return sum
};