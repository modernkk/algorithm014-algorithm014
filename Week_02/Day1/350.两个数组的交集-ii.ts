/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
    let result: number[] = [];
    let len = nums1.length;
    for (let i = 0; i < len; i++) {
        let val = nums1[i];
        let nums2Index = nums2.indexOf(val);
        if (nums2Index >= 0) {
            result.push(val);
            nums2.splice(nums2Index, 1)
        }
    }
    return result;
};
// @lc code=end

