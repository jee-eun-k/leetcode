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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {

    var dataX = [];
    var dataY = [];
    function traverse(node, lvl = 0, parent) {
        if (!node || (dataX.length && dataY.length)) {
            return true;
        }
        if (node.val === x) {
            dataX = [lvl, parent];
        } else if (node.val === y) {
            dataY = [lvl, parent];
        }
            traverse(node.left, lvl + 1, node.val);
            traverse(node.right, lvl + 1, node.val);
    }
    
    traverse(root);
    console.log(dataX, dataY)
    return dataX[0] === dataY[0] && dataX[1] !== dataY[1];
};