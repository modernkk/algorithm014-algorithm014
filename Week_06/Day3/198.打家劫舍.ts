/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
    let len = nums.length;
    if (len === 0) {
        return 0;
    }
    if (len === 1) {
        return nums[0];
    }
    let first = nums[0];
    let second = Math.max(nums[0], nums[1]);
    for (let i = 2; i < len; i++) {
        let temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
};
// @lc code=end
