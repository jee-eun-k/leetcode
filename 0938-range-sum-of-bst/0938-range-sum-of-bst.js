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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let sum = 0;
	var DFS = function(node) {
        if (node === null) {
            return true;
        }
        if (node.val >= low && node.val <= high) {
            sum += Number(node.val);
        }
        if (node.right !== null) {
            DFS(node.right);
        }
        if (node.left !== null) {
            DFS(node.left);
        }

    }
    DFS(root);
	return sum
    
};