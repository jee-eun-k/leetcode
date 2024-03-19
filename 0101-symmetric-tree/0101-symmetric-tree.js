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
var isSymmetric = function (root) {
    const recursive = (left, right) => {
        if (!left && !right) {
            return true;
        } else if (!left || !right || left.val !== right.val) {
            return false;
        }
        return recursive(left.left, right.right) && recursive(left.right, right.left);
    };
    return recursive(root.left, root.right);
};