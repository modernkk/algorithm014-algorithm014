/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
let indexMap = new Map();
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }
    return myBuildTree(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1);
};
function myBuildTree(preorder: number[], inorder: number[], preLeft: number, preRight: number, inLeft: number, inRight: number): TreeNode | null {
    if (preLeft > preRight) {
        return null;
    }
    let preRoot = preLeft;
    let inRoot = indexMap.get(preorder[preRoot]);
    let root = new TreeNode(preorder[preRoot]);
    let leftSize = inRoot - inLeft;
    root.left = myBuildTree(preorder, inorder, preLeft + 1, preLeft + leftSize, inLeft, inRoot - 1);
    root.right = myBuildTree(preorder, inorder, preLeft + leftSize + 1, preRight, inRoot + 1, inRight);
    return root;
}
// @lc code=end

