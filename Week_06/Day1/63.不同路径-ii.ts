/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let rows = obstacleGrid.length;
    if (rows === 0) {
        return 0;
    }
    let cols = obstacleGrid[0].length;
    if (cols === 0) {
        return 0;
    }
    let dp: number[] = new Array(cols);
    dp.fill(0);
    dp[0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
                continue;
            }
            if (j - 1 >= 0 && obstacleGrid[i][j - 1] === 0) {
                dp[j] = dp[j] + dp[j - 1];
            }
        }
    }
    return dp[cols - 1];
};
// @lc code=end

