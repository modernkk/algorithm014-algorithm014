/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
    let merged: number[][] = [];
    if (intervals.length <= 0) {
        return merged;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        let left = interval[0];
        let right = interval[1];
        let mLen = merged.length;
        if (mLen === 0 || merged[mLen - 1][1] < left) {
            merged.push(interval)
        } else {
            merged[mLen - 1][1] = Math.max(merged[mLen - 1][1], right);
        }
    }
    return merged;
};
// @lc code=end

