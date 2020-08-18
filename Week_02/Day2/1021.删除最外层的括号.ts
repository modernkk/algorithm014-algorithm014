/*
 * @lc app=leetcode.cn id=1021 lang=typescript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
function removeOuterParentheses(S: string): string {
    let result = '';
    let opened = 0;
    for (let c of S) {
        if (c === '(' && opened++ > 0) {
            result += c;
        }
        if (c === ')' && opened-- > 1) {
            result += c;
        }
    }
    return result;
};
// @lc code=end

