/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        let max = nums[i];
        for (let j = i; j < k + i; j++) {
            let temp = nums[j];
            max = Math.max(max, temp);
        }
        result.push(max);
    }
    return result;
};
// @lc code=end

