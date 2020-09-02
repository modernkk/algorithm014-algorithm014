/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(N: number): number {
    if (N === 0) {
        return 0;
    }
    let p = 0, q = 0, r = 1;
    for (let i = 1; i < N; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};
// @lc code=end

