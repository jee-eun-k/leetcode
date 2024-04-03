/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let zeroIndex = 1;
	for (let idx = 1, len = nums.length; idx < len; idx ++) {
		const prev = nums[idx - 1];
		const curr = nums[idx];
		if (prev !== curr) {
			nums[zeroIndex ++] = curr;
		}
	}
	return zeroIndex;
};