/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let result = [];
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < len; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let k = len - 1;
            while (j < k && nums[i] + nums[j] + nums[k] > 0) {
                k--;
            }
            if (j === k) {
                break;
            }
            if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
    return result;
};
// @lc code=end
