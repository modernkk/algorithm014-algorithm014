/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */
var coinChange = function (coins, amount) {
    if (amount === 0) {
        return 0;
    }
    coins.sort((a, b) => b - a);
    let ans = [Infinity];
    helper(coins, amount, 0, 0, ans);
    return ans[0] === Infinity ? -1 : ans[0];
};
function helper(coins, amount, cIndex, count, ans) {
    if (amount === 0) {
        ans[0] = Math.min(count, ans[0]);
        return;
    }
    if (cIndex === coins.length) {
        return;
    }
    for (let k = Math.floor(amount / coins[cIndex]); k >= 0 && k + count < ans[0]; k--) {
        helper(coins, amount - k * coins[cIndex], cIndex + 1, k + count, ans);
    }
}