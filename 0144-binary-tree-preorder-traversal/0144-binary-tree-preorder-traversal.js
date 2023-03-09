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
 * @return {number[]}
 */
var preorderTraversal = function(root, stack = []) {
    let answer = [];
    function DFS (node) {
        if (!node) {
            return true;
        }
        answer.push(node.val);
        DFS(node.left);
        DFS(node.right);

    }
    DFS(root);
    return answer;
};