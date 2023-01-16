/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let valueArray = [];
    var DFS = function(node) {
        if (!node) {
            return true;
        }
        for (let idx = 0, len = node.children.length; idx < len; idx ++ ) {
            let child = node.children[idx];
            DFS(child);
        }
        valueArray.push(node.val);

    };
    DFS(root);
    return valueArray;
};