/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    let map = new Map();
    for (let i = 0; i < nums1.length; i++) {
        let key = nums1[i];
        let val = 1;
        if (map.has(key)) {
            val = map.get(key);
            map.set(key, val + 1);
        } else {
            map.set(key, val);
        }
    }
    let result: number[] = [];
    for (let j = 0; j < nums2.length; j++) {
        let key = nums2[j];
        if (map.has(key)) {
            result.push(key);
            let count = map.get(key) - 1;
            if (count > 0) {
                map.set(key, count)
            } else {
                map.delete(key);
            }
        }
    }
    return result;
};
// @lc code=end

