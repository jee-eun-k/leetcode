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
var getMinimumDifference = function(root) {
    let answer = Number.POSITIVE_INFINITY;
    const recursive = (node, stack = []) => {
        if (!node) {
            const lastVal = stack.pop();
            stack.forEach((elem) => {
                answer = Math.min(Math.abs(lastVal - elem), answer);
            });
            return true;
        }
        stack.push(node.val);
        recursive(node.left, [...stack]);
        recursive(node.right, [...stack]);
        
    };
    recursive(root);
    return answer;
};