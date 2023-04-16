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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let answer = [];
    function traverse(node, lvl = 0) {
        if (!node) {
            return true;
        }
        let lvlArr = answer[lvl];
        if (lvlArr === undefined) {
            answer[lvl] = [node.val];
        } else {
            lvlArr.push(node.val);
            answer[lvl] = lvlArr;            
        }
        traverse(node.left, lvl + 1);
        traverse(node.right, lvl + 1);
    }
    traverse(root);
    return answer;
};