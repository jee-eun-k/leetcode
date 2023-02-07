var createTargetArray = function(nums, index) {
    let target = [];
    for (let idx = 0, len = nums.length; idx < len; idx ++) {
        let tempIdx = index[idx];
        if (target[tempIdx] !== undefined) {
            target.splice(tempIdx, 0, nums[idx]).join();
        } else {
            target[tempIdx] = nums[idx];
        }
    }
    return target;
};