/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) {
        return 0;
    }
    let nr = grid.length;
    let nc = grid[0].length;
    let ans = 0;
    for (let i = 0; i < nr; i++) {
        for (let j = 0; j < nc; j++) {
            if (grid[i][j] === '1') {
                ans += 1;
                dfs(grid, i, j);
            }
        }
    }
    return ans;
};
function dfs(grid, r, c) {
    let rowSize = grid.length;
    let colSize = grid[0].length;
    if (r < 0 || c < 0 || r >= rowSize || c >= colSize || grid[r][c] === '0' ) {
        return;
    }
    grid[r][c] = '0';
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
}
// @lc code=end

