/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    let len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        let val = digits[i];
        let sum = (val + 1) % 10;
        digits[i] = sum;
        if (sum !== 0) {
            return digits;
        }
    }
    return [1, ...digits];
};
// @lc code=end

