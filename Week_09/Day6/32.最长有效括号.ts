/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
    let maxans = 0;
    let len = s.length;
    let dp: number[] = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = (i > 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
                dp[i] = dp[i - 1] + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
        }
        maxans = Math.max(dp[i], maxans);
    }
    return maxans;
};
// @lc code=end

