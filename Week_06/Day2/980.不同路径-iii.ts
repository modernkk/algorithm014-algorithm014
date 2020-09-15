/*
 * @lc app=leetcode.cn id=980 lang=typescript
 *
 * [980] 不同路径 III
 */

// @lc code=start
function uniquePathsIII(grid: number[][]): number {
    let res = 0;
    let sx = 0;
    let sy = 0;
    let empty = 1;
    let rows = grid.length;
    let cols = grid[0].length;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 0) {
                empty++;
            } else if (grid[r][c] === 1) {
                sx = r;
                sy = c;
            }
        }
    }
    function dfs(grid: number[][], x: number, y: number) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] < 0) {
            return;
        }
        if (grid[x][y] === 2) {
            if (empty === 0) {
                res++;
            }
            return;
        }
        grid[x][y] = -2;
        empty--;
        dfs(grid, x + 1, y);
        dfs(grid, x - 1, y);
        dfs(grid, x, y + 1);
        dfs(grid, x, y - 1);
        grid[x][y] = 0;
        empty++;
    }
    dfs(grid, sx, sy);
    return res;
};
// @lc code=end

