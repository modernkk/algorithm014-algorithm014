/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    nums.sort((a, b) => a - b);
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];
        let count = 1;
        if (map.has(key)) {
            count += map.get(key);
        }
        map.set(key, count)
    }
    let result = [...new Set(nums)];
    result.sort((a, b) => map.get(b) - map.get(a));
    return result.slice(0, k);
};
// @lc code=end

