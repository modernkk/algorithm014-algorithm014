/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    let sa = s.split('');
    let ta = t.split('');
    for (let i = 0; i < sa.length; i++) {
        if (sa.indexOf(s[i]) !== ta.indexOf(t[i])) {
            return false;
        }
    }
    return true;
};
// @lc code=end

