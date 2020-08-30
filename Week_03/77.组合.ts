/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
    let output: number[][] = [];
    let curr: number[] = []
    function backtrack(first: number, curr: number[]) {
        if (curr.length === k) {
            output.push(curr.slice(0))
            return;
        }
        for (let i = first; i < n + 1; i++) {
            curr.push(i);
            backtrack(i + 1, curr);
            curr.pop()
        }
    }
    backtrack(1, curr);
    return output;
};
// @lc code=end

