/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
    let len = nums.length;
    let ans: number[][] = [];
    let vis: boolean[] = new Array(len).fill(false);

    const backtrack = (idx: number, perm: number[]) => {
        if (idx === len) {
            ans.push([...perm]);
            return;
        }
        for (let i = 0; i < len; i++) {
            if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
                continue;
            }
            vis[i] = true;
            perm.push(nums[i]);
            backtrack(idx + 1, perm);
            vis[i] = false;
            perm.pop();
        }
    };
    nums.sort((a, b) => a - b);
    backtrack(0, []);
    return ans;
};
// @lc code=end

