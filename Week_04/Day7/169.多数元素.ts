/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    let countMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (!countMap.has(num)) {
            countMap.set(num, 1);
        } else {
            countMap.set(num, countMap.get(num) + 1);
        }
    }
    let ans = undefined;
    let temp = undefined;
    for (let [key, value] of countMap.entries()) {
        if (!temp || temp < value) {
            temp = value;
            ans = key;
        }
    }
    return ans;
};
// @lc code=end

