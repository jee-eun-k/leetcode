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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let answer = 0;
    const setRoot = (node) => {
        if (!node) {
            return;
        }
        helper(node, targetSum);
        setRoot(node.right);
        setRoot(node.left);
    };
    const helper = (node, sum) => {
        if (!node) {
            return;
        }
        if (sum === node.val) {
            answer ++;
        }
        helper(node.right, sum - node.val);
        helper(node.left, sum - node.val);
    };
    setRoot(root);
    return answer;
};