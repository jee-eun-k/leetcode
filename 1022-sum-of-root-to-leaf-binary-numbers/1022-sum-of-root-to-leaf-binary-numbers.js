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
var sumRootToLeaf = function(root) {
    let answer = 0;
    const DFS = function(node, stack = []) {
    
        stack = stack.map((a, b) => {return a * 2});
        stack.push(node.val);
        if (!node.right && !node.left) {
            answer += stack.reduce((a, b) => {return a + b});         
        } else {
            if (node.right) {
                DFS(node.right, stack.slice(''));            
            }
            if (node.left) {
                DFS(node.left, stack.slice(''));   
                
            }
        }

    }
    DFS(root);
    
    return answer;
};