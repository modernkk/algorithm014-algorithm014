/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
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
        dp[j][1] = Math.max(dp[j - 1][1], -prices[j]);
    }
    return Math.max(dp[len - 1][0], dp[len - 1][1]);
};
// @lc code=end

// dp方程
// T[i][0] = max(T[i - 1][0], T[i - 1][1] + prices[i]) // 第i天卖出的最大收益
// T[i][1] = max(T[i - 1][1], -prices[i]) // 第i天买入的最大收益
