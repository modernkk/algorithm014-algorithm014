/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let another = target - nums[i];
        if (map.has(another)) {
            return [map.get(another), i];
        }
        map.set(nums[i], i);
    }
    let result: number[] = [];
    for (let j of map.keys()) {
        result.push(j);
    }
    return result;
};
// @lc code=end

