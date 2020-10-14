/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
    let len = nums.length;
    if (len === 0) {
        return 0;
    }
    let dp: number[] = [];
    dp[0] = 1;
    let res = dp[0];
    for (let i = 1; i < len; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        res = Math.max(res, dp[i]);
    }
    return res;
};
// @lc code=end

