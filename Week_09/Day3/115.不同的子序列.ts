/*
 * @lc app=leetcode.cn id=115 lang=typescript
 *
 * [115] 不同的子序列
 */

// @lc code=start
function numDistinct(s: string, t: string): number {
    let tl = t.length;
    let sl = s.length;
    let dp: number[][] = [];
    for (let r = 0; r <= tl; r++) {
        dp[r] = new Array<number>(tl).fill(0);
        dp[r][0] = 0;
    }
    for (let c = 0; c <= sl; c++) {
        dp[0][c] = 1;
    }
    for (let i = 1; i <= tl; i++) {
        for (let j = 1; j <= sl; j++) {
            if (t[i - 1] === s[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    return dp[tl][sl];
};
// @lc code=end

