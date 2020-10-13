/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
    let len = s.length;
    let step = 2 * k;
    let loop = Math.floor(len / (2 * k));
    let remainLen = len % (2 * k);
    let result = '';
    for (let i = 0; i < loop; i++) {
        let word = s.substring(i * step, i * step + k);
        let rw = word.split('').reverse().join('');
        result = `${result}${rw}${s.substring(i * step + k, i * step + step)}`;
    }
    if (remainLen === 0) {
        return result;
    }
    let remainWord = s.slice(-remainLen);
    if (remainLen < k) {
        result = `${result}${remainWord.split('').reverse().join('')}`;
    } else {
        let tempW = remainWord.substr(0, k);
        let tempRW = tempW.split('').reverse().join('');
        result = `${result}${tempRW}${remainWord.substring(k)}`;
    }
    return result;
};
// @lc code=end

