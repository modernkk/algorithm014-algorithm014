/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while(len1 >= 0 && len2 >= 0) {
        nums1[len--] = nums1[len1] < nums2[len2] ? nums2[len2--]: nums1[len1--];
    }
    function arrayCopy(src: number[], srcIndex: number, target: number[], targetIndex: number, length: number) {
        target.splice(targetIndex, length, ...src.splice(srcIndex, srcIndex + length));
    }
    arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};
// @lc code=end

