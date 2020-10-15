/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let len = s.length;
    if (len < 2) {
        return s;
    }
    let maxLen = 1;
    let res = s.substring(0, 1);
    for (let i = 0; i < len - 1; i++) {
        let s1 = centerSpread(s, i, i);
        let s2 = centerSpread(s, i, i + 1);
        let maxStr = s1.length > s2.length ? s1 : s2;
        if (maxStr.length > maxLen) {
            maxLen = maxStr.length;
            res = maxStr;
        }
    }
    return res;
};
function centerSpread(s: string, left: number, right: number) {
    let len = s.length;
    let i = left;
    let j = right;
    while (i >= 0 && j < len) {
        if (s[i] === s[j]) {
            i--;
            j++;
        } else {
            break;
        }
    }
    return s.substring(i + 1, j);
}
// @lc code=end

