/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    let len = nums.length;
    let ans = new Array(len);
    ans[0] = 1;
    for (let i = 1; i < len; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }
    let R = 1;
    for (let j = len - 1; j >= 0; j--) {
        ans[j] = ans[j] * R;
        R = R * nums[j]
    }
    return ans;
};
// @lc code=end

