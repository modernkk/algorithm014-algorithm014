/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
    let result = qucMul(x, Math.abs(n));
    if (n > 0) {
        return result
    } else {
        return 1 / result;
    }
};
function qucMul(x: number, n: number): number {
    if (n === 0) {
        return 1;
    }
    let y = qucMul(x, Math.floor(n / 2));
    return n % 2 === 0 ? y * y: y * y * x;
} 
// @lc code=end

