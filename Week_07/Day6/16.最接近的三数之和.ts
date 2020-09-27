/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let best = Infinity;
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1; 
        let k = len - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                return sum;
            }
            if (Math.abs(sum - target) < Math.abs(best - target)) {
                best = sum;
            }
            if (sum > target) {
                let k0 = k - 1;
                while (j < k0 && nums[k0] === nums[k]) {
                    --k0;
                }
                k = k0;
            } else {
                let j0 = j + 1;
                while (j0 < k && nums[j0] === nums[j]) {
                    ++j0;
                }
                j = j0;
            }
        }
    }
    return best;
};
// @lc code=end

