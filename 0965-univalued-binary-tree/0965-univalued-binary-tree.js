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
var isUnivalTree = function(root) {
    var flag = true;
    function traverse(node, val = node.val) {
        if (!node || !flag) {
            return true;
        }
        if (node.val !== val) {
            flag = false;
            return true;
        }
        traverse(node.left, val);
        traverse(node.right, val);
        
        
    }
    traverse(root);
    return flag;
};