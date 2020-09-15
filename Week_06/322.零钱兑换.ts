/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    if (coins.length === 0) {
        return -1;
    }
    coins.sort((a, b) => b - a);
    let ans = Infinity;
    function helper(coins: number[], amount: number, currentIdx: number, count: number) {
        if (amount === 0) {
            ans = Math.min(ans, count);
            return;
        }
        if (currentIdx >= coins.length) {
            return;
        }
        for (let k = Math.floor(amount / coins[currentIdx]); k >= 0 && k + count < ans ; k--) {
            helper(coins, amount - k * coins[currentIdx], currentIdx + 1, k + count);
        }
    }
    helper(coins, amount, 0, 0);
    return ans === Infinity ? -1 : ans;
};
export {};
// @lc code=end

