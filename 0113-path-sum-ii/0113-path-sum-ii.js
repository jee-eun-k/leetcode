/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    
    let answer = [];
    const helper = (node, arr, sum) => {
        if (!node) {
            return;
        }
        arr.push(node.val);
        if (!node.right && !node.left) {
            if (sum === node.val) {
                answer.push(arr);
            }
            
        }
        helper(node.left, arr.slice(), sum - node.val);
        helper(node.right, arr.slice(), sum - node.val);

    };
    helper(root, [], targetSum);
    return answer;
};