/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 */

// @lc code=start
let preorder = function (root) {
    let result = [];
    dfs(root, result);
    return result;
}
function dfs(root, ans) {
    if (root !== null) {
        ans.push(root.val);
        for (let child of root.children) {
            dfs(child, ans);
        }
    }
}
// @lc code=end