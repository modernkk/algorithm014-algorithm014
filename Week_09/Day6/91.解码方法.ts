/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 */

// @lc code=start
function numDecodings(s: string): number {
    let len = s.length;
    if (len === 0) {
        return 0;
    }
    if (s[0] === '0') {
        return 0;
    }
    let dp: number[] = new Array(len).fill(0);
    dp[0] = 1;
    for (let i = 1; i < len; i++) {
        if (s[i] !== '0') {
            dp[i] = dp[i - 1];
        }
        let num = Number(`${s[i-1]}${s[i]}`);
        if (num >= 10 && num <= 26) {
            if (i === 1) {
                dp[i]++;
            } else {
                dp[i] += dp[i - 2];
            }
        }
    }
    return dp[len - 1];
};
// @lc code=end

