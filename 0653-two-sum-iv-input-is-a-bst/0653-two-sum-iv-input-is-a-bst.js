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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var answer = false;
    var arr = [];
    function traverse(node) {
        if (!node || answer) {
            return true;
        }
        let val = node.val;
        if (arr.indexOf(val) > -1) {
            answer = true;
        } else {
            arr.push(k - val);
            traverse(node.left);
            traverse(node.right);
        }
    }
    traverse(root);
    return answer;
};