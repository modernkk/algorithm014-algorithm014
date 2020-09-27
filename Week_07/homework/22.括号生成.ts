/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    let ans: string[] = [];
    dfs('', n, n, ans);
    return ans;
};
function dfs(currStr: string, left: number, right: number, ans: string[]) {
    if (left === 0 && right === 0) {
        ans.push(currStr);
        return;
    }
    if (left > right) {
        return;
    }
    if (left > 0) {
        dfs(`${currStr}(`, left - 1, right, ans);
    }
    if (right > 0) {
        dfs(`${currStr})`, left, right - 1, ans);
    }
}
// @lc code=end

