/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
    let rowUsed = [];
    let colUsed = [];
    let blockUsed = [];
    let rows = board.length;
    let cols = board[0].length;
    for (let n = 0; n < 9; n++) {
        rowUsed[n] = new Array(10).fill(false);
        colUsed[n] = new Array(10).fill(false);
    }
    for (let r = 0; r < 3; r++) {
        blockUsed[r] = [];
        for (let c = 0; c < 3; c++) {
            blockUsed[r][c] = new Array(10).fill(false);
        }
    }
    for (let i = 0; i < rows; i++) {
        let bi = Math.floor(i / 3);
        for (let j = 0; j < cols; j++) {
            let bj = Math.floor(j / 3);
            let num = board[i][j];
            if (num !== '.') {
                let numIdx = Number(num);
                rowUsed[i][numIdx] = true;
                colUsed[j][numIdx] = true;
                blockUsed[bi][bj][numIdx] = true;
            }
        }
    }
    console.log(rowUsed)
    console.log(colUsed)
    console.log(blockUsed)
    recusiveSolveSudoku(board, rowUsed, colUsed, blockUsed, 0, 0);
};
function recusiveSolveSudoku(board, rowUsed, colUsed, blockUsed, row, col) {
    if (col === board[0].length) {
        col = 0;
        row++;
        if (row === board.length) {
            return true;
        }
    }
    if (board[row][col] === '.') {
        for (let i = 1; i <= 9; i++) {
            let br = Math.floor(row / 3);
            let bc = Math.floor(col / 3);
            let canUsed = !(rowUsed[row][i] || colUsed[col][i] || blockUsed[br][bc][i]);
            if (canUsed) {
                rowUsed[row][i] = true;
                colUsed[col][i] = true;
                blockUsed[br][bc][i] = true;
                board[row][col] = `${i}`;
                if (recusiveSolveSudoku(board, rowUsed, colUsed, blockUsed, row, col + 1)) {
                    return true;
                }
                board[row][col] = '.';
                rowUsed[row][i] = false;
                colUsed[col][i] = false;
                blockUsed[br][bc][i] = false;
            }
        }
    } else {
        return recusiveSolveSudoku(board, rowUsed, colUsed, blockUsed, row, col + 1);
    }
    return false;
}
// @lc code=end

