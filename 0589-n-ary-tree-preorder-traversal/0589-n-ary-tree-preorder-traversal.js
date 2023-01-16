/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root, output = []) {
    if (!root) {
        return output;
    }
    var DFS = function(node) {
        output.push(node.val);
        for (let idx = 0, len = node.children.length; idx < len; idx ++) {
            DFS(node.children[idx]);
        }
    };
    DFS(root);
    return output;
};