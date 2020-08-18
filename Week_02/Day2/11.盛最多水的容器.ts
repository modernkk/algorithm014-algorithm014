/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    let max = 0;
    let l = 0; 
    let r = height.length - 1;
    while( l < r) {
        let area = (r -l) * Math.min(height[l], height[r]);
        max = Math.max(max, area);
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return max;
};
// @lc code=end

