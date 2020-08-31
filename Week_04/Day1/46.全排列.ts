/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    let output: number[] = [];
    for (let num of nums) {
        output.push(num);
    }
    let res: number[][] = [];
    backtrack(nums.length, output, res, 0);
    return res;
};
function backtrack(n: number, output: number[], res: number[][], first: number) {
    if (first === n) {
        res.push(output);
        return;
    }
    for (let i = first; i < n; i++) {
        [output[first], output[i]] = [output[i], output[first]];
        backtrack(n, output, res, first + 1);
        [output[first], output[i]] = [output[i], output[first]];
    }
}
// @lc code=end

