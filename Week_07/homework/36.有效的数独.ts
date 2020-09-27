/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
    let rows = [];
    let cols = [];
    let blocks = [];
    for (let i = 0; i < 9; i++) {
        rows[i] = new Map<string, number>(); 
        cols[i] = new Map<string, number>(); 
        blocks[i] = new Map<string, number>(); 
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            let num = board[i][j];
            if (num !== '.') {
                let rowMap = rows[i];
                let colMap = cols[j];
                let blockMap = blocks[blockIndex];
                if (rowMap.has(num)) {
                    return false;
                } else {
                    rowMap.set(num, 1);
                }
                if (colMap.has(num)) {
                    return false;
                } else {
                    colMap.set(num, 1);
                }
                if (blockMap.has(num)) {
                    return false;
                } else {
                    blockMap.set(num, 1);
                }
            }
        }
    }
    return true;
};
// @lc code=end

