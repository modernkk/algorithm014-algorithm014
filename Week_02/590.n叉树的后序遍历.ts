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
    if (root === null) {
        return [];
    }
    let stack = [root];
    let result = [];
    while (stack.length) {
        let r = stack.pop();
        if (r !== null) {
            result.push(r.val);
        }
        for (let c of r.children) {
            stack.push(c);
        }
    }
    return result.reverse();
};
