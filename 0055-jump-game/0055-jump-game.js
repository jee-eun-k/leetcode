/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	let arrLen = nums.length;
	let maxIndex = arrLen - 1;
	for (let idx = arrLen; idx >= 0; idx --) {
		let maxReachable = idx + nums[idx];
		if (maxReachable >= arrLen || maxReachable >= maxIndex) {
			maxIndex = idx;
		}
	}
	return !maxIndex;
};