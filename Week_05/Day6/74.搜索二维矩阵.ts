/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    let row = matrix.length;
    if (row === 0) {
        return false;
    }
    let col = matrix[0].length;
    let pLen = row * col;
    let left = 0;
    let right = pLen - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let r = Math.floor(mid / col);
        let c = mid % col;
        if (target === matrix[r][c]) {
            return true;
        } else if (target > matrix[r][c]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};
// @lc code=end

