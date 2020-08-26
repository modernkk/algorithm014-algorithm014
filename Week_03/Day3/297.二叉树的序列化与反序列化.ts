/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root === null) {
        return 'X';
    }
    let left = serialize(root.left);
    let right = serialize(root.right);
    return `${root.val},${left},${right}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let list = data.split(',');
    return buildTree(list);
};

function buildTree(list) {
    let s = list.shift();
    if (s === 'X') {
        return null;
    }
    let root = new TreeNode(s);
    root.left = buildTree(list);
    root.right = buildTree(list);
    return root;    
}
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */