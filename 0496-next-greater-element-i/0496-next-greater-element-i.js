/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let answer = [];
    for (let idx = 0, len = nums1.length; idx < len; idx ++) {
        let num = nums1[idx], sIdx = nums2.indexOf(num);
        if (sIdx === nums2.length - 1) {
            answer[idx] = -1;
        } else {
            while (true) {
                if (sIdx === nums2.length - 1) {
                    answer[idx] = -1;
                    break;
                } 
                if (nums2[++ sIdx] > num) {
                    answer[idx] = nums2[sIdx];
                    break;
                }
            }
        }
    }
    return answer;
};