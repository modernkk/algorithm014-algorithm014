/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
    let n = triangle.length;
    if (n < 1) {
        return 0;
    }
    let dp: number[][] = [];
    for (let i = 0; i < n; i++) {
        dp[i] = [];
    }
    dp[0][0] = triangle[0][0];
    for (let r = 1; r < n; r++) {
        dp[r][0] = dp[r - 1][0] + triangle[r][0];
        for (let c = 1; c < n; c++) {
            dp[r][c] = Math.min(dp[r - 1][c], dp[r - 1][c - 1]) + triangle[r][c];
        }
        dp[r][r] = dp[r - 1][r - 1] + triangle[r][r];
    }
    let minTotal = dp[n - 1][0];
    for (let j = 1; j < n; j++) {
        minTotal = Math.min(dp[n - 1][j], minTotal);
    }
    return minTotal;
};
// @lc code=end

