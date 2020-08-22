/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    let ans: string[] = new Array();
    if (n === 0) {
        return ans;
    }
    dfs('', n, n, ans);
    return ans;
};
function dfs(curStr: string, left: number, right: number, ans: string[]) {
    if (left === 0 && right === 0) {
        ans.push(curStr);
        return;
    }

    if (left > right) {
        return;
    }

    if (left > 0) {
        dfs(`${curStr}(`, left - 1, right, ans);
    }
    if (right > 0) {
        dfs(`${curStr})`, left, right - 1, ans);
    }
}
// @lc code=end
