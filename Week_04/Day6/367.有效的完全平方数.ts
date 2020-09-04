/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
    if (num < 2) {
        return true;
    }
    let left = 2;
    let right = Math.ceil(num / 2);
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let guess = mid * mid;
        if (guess === num) {
            return true;
        } else if (guess > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};
// @lc code=end

