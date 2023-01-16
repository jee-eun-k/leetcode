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
 * @return {boolean}
 */
var evaluateTree = function(root) {

    if (root.left === null && root.right === null) {
        // leaf
        return root.val;
    } else {
        // none - leaf
        if (root.val === 3) {
            return evaluateTree(root.right) && evaluateTree(root.left);
        } else {
            return evaluateTree(root.right) || evaluateTree(root.left);
        }

    }
    
};
