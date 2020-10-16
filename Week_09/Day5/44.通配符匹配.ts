/*
 * @lc app=leetcode.cn id=44 lang=typescript
 *
 * [44] 通配符匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
    let m = s.length;
    let n = p.length;
    let dp: boolean[][] = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(false);
    }
    dp[0][0] = true;
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = true;
        } else {
            break;
        }
    }
    for (let r = 1; r <= m; r++) {
        for (let c = 1; c <= n; c++) {
            if (p[c - 1] === '*') {
                dp[r][c] = dp[r][c - 1] || dp[r - 1][c];
            } else if (p[c - 1] === '?' || p[c - 1] === s[r - 1]) {
                dp[r][c] = dp[r - 1][c - 1];
            }
        }
    }
    return dp[m][n];
};
// @lc code=end

