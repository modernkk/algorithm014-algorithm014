function solve(board: string[][]): void {
    let rows = board.length;
    if (rows === 0) {
        return;
    }
    let cols = board[0].length;
    for (let r = 0; r < rows; r++) {
        dfs(board, r, 0);
        dfs(board, r, cols - 1);
    }
    for (let c = 1; c < cols - 1; c++) {
        dfs(board, 0, c);
        dfs(board, rows - 1, c);
    }
    for (let m = 0; m < rows; m++) {
        for (let n = 0; n < cols; n++) {
            if (board[m][n] === 'A') {
                board[m][n] = 'O';
            } else if (board[m][n] === 'O') {
                board[m][n] = 'X';
            }
        }
    }

};

function dfs(board: string[][], x: number, y: number) {
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] !== 'O') {
        return;
    }
    board[x][y] = 'A';
    dfs(board, x - 1, y)
    dfs(board, x + 1, y);
    dfs(board, x, y - 1);
    dfs(board, x, y + 1);
}