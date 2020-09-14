/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
export function minPathSum(grid: number[][]): number {
    let rows = grid.length;
    if (rows === 0) {
        return 0;
    }
    let cols = grid[0].length;
    if (cols === 0) {
        return 0;
    }
    let dp: number[][] = new Array(rows);
    for (let i = 0; i < rows; i++) {
        dp[i] = new Array(cols);
    }
    dp[0][0] = grid[0][0];
    for (let r = 1; r < rows; r++) {
        dp[r][0] = dp[r - 1][0] + grid[r][0];
    }
    for (let c = 1; c < cols; c++) {
        dp[0][c] = dp[0][c - 1] + grid[0][c];
    }
    for (let m = 1; m < rows; m++) {
        for (let n = 1; n < cols; n++) {
            dp[m][n] = Math.min(dp[m - 1][n], dp[m][n - 1]) + grid[m][n];
        }
    }
    return dp[rows - 1][cols - 1];
};
// @lc code=end

