/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
    let len = nums.length;
    if (len < 4) {
        return [];
    }
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < len - 4 + 1; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < len - 3 + 1; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let temp = target - nums[i] - nums[j];
            let l = j + 1;
            let r = len - 1;
            while (l < r) {
                if (nums[l] + nums[r] < temp) {
                    l++
                } else if (nums[l] + nums[r] > temp) {
                    r--;
                } else {
                    result.push([nums[i], nums[j], nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;
                    l++;
                    r--;
                }
            }
        }
    }
    return result;
};


// @lc code=end

