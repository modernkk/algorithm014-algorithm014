/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
    let row = text1.length;
    let col = text2.length;
    let table: number[][] = new Array(row + 1);
    for (let t = 0; t <= row; t++ ) {
        table[t] = new Array(col + 1);
    }
    for (let c = 0; c <= col; c++) {
        table[0][c] = 0
    }
    for (let r = 0; r <= row; r++) {
        table[r][0] = 0;
    }
    for (let i = 1; i <= row; i++) {
        let s1 = text1[i - 1];
        for (let j = 1; j <= col; j++) {
            let s2 = text2[j - 1];
            if (s1 === s2) {
                table[i][j] = table[i - 1][j - 1] + 1;
            } else {
                table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
            }
        }
    }
    return table[row][col];
};
// @lc code=end

