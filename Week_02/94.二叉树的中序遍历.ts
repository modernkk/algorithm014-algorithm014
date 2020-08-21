/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    helper(root, result);
    return result;
};
function helper(root: TreeNode | null, res: number[]) {
    if (root !== null) {
        if (root.left !== null) {
            helper(root.left, res);
        }
        res.push(root.val);
        if (root.right !== null) {
            helper(root.right, res);
        }
    }
}
// @lc code=end

