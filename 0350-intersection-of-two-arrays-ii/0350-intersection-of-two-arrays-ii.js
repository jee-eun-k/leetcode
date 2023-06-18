/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let temp = [];
    let arr1 = nums1;
    let arr2 = nums2;
    if (nums1.length > nums2.length) {
        arr1 = nums2;
        arr2 = nums1;
    }
    while (arr1.length) {
        let num = arr1.pop();
        let idx = arr2.indexOf(num);
        if (idx > -1) {
            temp.push(num);
            arr2[idx] = undefined;
        }
    }
    return temp;  
};