function getKthMagicNumber(k: number): number {
    let ans = new Array(k);
    ans[0] = [1];
    let p3 = 0;
    let p5 = 0;
    let p7 = 0;
    for (let i = 1; i < k; i++) {
        ans[i] = Math.min(ans[p3] * 3, ans[p5] * 5, ans[p7] * 7);
        if (ans[i] === ans[p3] * 3) p3++;
        if (ans[i] === ans[p5] * 5) p5++;
        if (ans[i] === ans[p7] * 7) p7++;
    }
    return ans[k - 1];
};
