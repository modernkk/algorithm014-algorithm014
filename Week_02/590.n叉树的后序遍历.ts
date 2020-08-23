/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    let result = [];
    helper(root, result);
    return result;
};

function helper(node, ans) {
    if (node !== null) {
        for (let child of node.children) {
            if (child !== null) {
                helper(child, ans)
            }
        }
        ans.push(node.val);
    }
}