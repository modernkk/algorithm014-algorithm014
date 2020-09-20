/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
    let maxSide = 0;
    let rows = matrix.length;
    if (rows === 0) {
        return 0;
    }
    let cols = matrix[0].length;
    if (cols === 0) {
        return 0;
    }
    let dp = new Array(rows);
    for (let i = 0; i < rows; i++) {
        dp[i] = new Array(cols);
        dp[i].fill(0);
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === '1') {
                if (r === 0 || c === 0) {
                    dp[r][c] = 1;
                } else {
                    dp[r][c] = Math.min(dp[r - 1][c], dp[r - 1][c - 1], dp[r][c - 1]) + 1;
                }
                maxSide = Math.max(maxSide, dp[r][c]);
            }
        }
    }
    return maxSide * maxSide;
};
// @lc code=end

