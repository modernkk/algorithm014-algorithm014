/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
function maxProduct(nums: number[]): number {
    let maxF = nums[0];
    let minF = nums[0];
    let ans = nums[0];
    let len = nums.length;
    for (let i = 1; i < len; i++) {
        let mx = maxF;
        let mn = minF;
        maxF = Math.max(mx * nums[i], Math.max(mn * nums[i], nums[i]));
        minF = Math.min(mn * nums[i], Math.min(mx * nums[i], nums[i]));
        ans = Math.max(maxF, ans);
    }
    return ans;
};
// @lc code=end

