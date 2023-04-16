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
var averageOfLevels = function(root) {
    let answer = [];
    let sum = [];
    let count = [];
    function DFS(node, lvl = 0) {
        if (!node) {
            return;
        }
        if (sum[lvl] !== undefined) {
            sum[lvl] = sum[lvl] + node.val;
            count[lvl] = count[lvl] + 1;
        } else {
            sum[lvl] = node.val;
            count[lvl] = 1;
        }
        
        DFS(node.left, lvl + 1);
        DFS(node.right, lvl + 1);
    }
    DFS(root);
    console.log(sum, count)
    sum.forEach((val, idx) => {
        answer.push(val / count[idx])
        
    });
    return answer;
};