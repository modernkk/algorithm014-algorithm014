/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
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
    let p1 = nums.slice(0, len - 1);
    let p2 = nums.slice(1, len);
    return Math.max(myRob(p1), myRob(p2));
};

function myRob(nums: number[]): number {
    let first = 0;
    let second = 0;
    let tmp = 0;
    for (let num of nums) {
        tmp = second;
        second = Math.max(first + num, second);
        first = tmp;
    }
    return second;
}
export {};
// @lc code=end

