/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    let output: number[][] = [];
    output.push([]);
    for (let num of nums) {
        let subsets = [];
        for (let o of output) {
            let s = new Set(o);
            s.add(num);
            subsets.push(s);
        }
        for (let sub of subsets) {
            output.push([...sub]);
        }
    }
    return output;
};
// @lc code=end

