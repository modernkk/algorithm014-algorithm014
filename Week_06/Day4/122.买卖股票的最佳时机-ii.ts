/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let len = prices.length;
    if (len === 0) {
        return 0;
    }
    let dp: number[][] = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(2);
    }
    dp[0][0] = 0;
    dp[0][1] = -prices[0];

    for (let j = 1; j < len; j++) {
        dp[j][0] = Math.max(dp[j - 1][0], dp[j - 1][1] + prices[j]);
        dp[j][1] = Math.max(dp[j - 1][1], dp[j - 1][0] - prices[j]);
    }
    return Math.max(dp[len - 1][0], dp[len - 1][1]);
};
// @lc code=end
