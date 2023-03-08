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
 * @return {number}
 */
var maxDepth = function(root) {
    function DFS (node, depth = 0) {
        if (!node) {
            return depth;
        }
        depth ++;
        return Math.max(DFS(node.right, depth), DFS(node.left, depth));
        
    }
    return DFS(root);
};