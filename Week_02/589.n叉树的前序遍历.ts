/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
let preorder = function(root) {
    let result = [];
    dfs(root, result);
    return result;
};

function dfs(node, ans) {
    if (node !== null) {
        ans.push(node.val);
        for (let child of node.children) {
            dfs(child, ans)
        }
    }
}