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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let newRoot = tempNode = null;
    var DFS = function(node) {
        if (!node) {
            return true;
        }
        DFS(node.left); // get to the smallest node first
        if (!newRoot) {
            newRoot = tempNode = node; // set the smallest node to the new root
        } else {
            tempNode.right = node; // link node to the right of the tree
            tempNode = tempNode.right;
            tempNode.left = null; // this part should be null!
            
        }
        DFS(node.right);
    };
    DFS(root);
    return newRoot; // return new tree
};