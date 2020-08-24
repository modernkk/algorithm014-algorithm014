/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    let size = s.length;
    if (size === 0) {
        return true;
    }
    let mod = size % 2;
    if (mod !== 0) {
        return false;
    }
    let dict = new Map();
    dict.set(')', '(');
    dict.set(']', '[');
    dict.set('}', '{');
    let stack = [];
    for (let i = 0; i < size; i++) {
        let val = s[i];
        if (!dict.has(val)) {
            stack.push(val);
        } else if (stack.length > 0 && stack[stack.length - 1] === dict.get(val)) {
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length === 0) {
        return true
    }
    return false;
};
// @lc code=end

