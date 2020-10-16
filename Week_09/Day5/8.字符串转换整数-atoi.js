/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s) {
    s = s.trim();
    let numStr = '';
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (i === 0 && (c === '+' || c === '-')) {
            numStr += c;
            continue;
        }
        if (/[0-9]/.test(c) && c !== ' ') {
            numStr += c;
        } else {
            break;
        }
    }

    let MAX = Math.pow(2, 31) - 1;
    let MIN = -Math.pow(2, 31);
    console.log(numStr)
    let num = numStr * 1;

    if (num > MAX) {
        return MAX;
    }
    if (num < MIN) {
        return MIN;
    }
    return num || 0;
};
// @lc code=end

