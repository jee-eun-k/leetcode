/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var answer = true;
    function traverse(n1, n2) {
        if (!n1 && !n2) {
            return true;
        }        
        if ((!n1 && n2) || (n1 && !n2) || n1.val != n2.val) {
            answer = false;
            return true;
        }


        traverse(n1.left, n2.left);
        traverse(n1.right, n2.right);
    }
    traverse(p, q);
    return answer;
};
