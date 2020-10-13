/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
function reverseWords(s: string): string {
    let arrS = s.split(' ');
    for (let i = 0; i < arrS.length; i++) {
        let word = arrS[i];
        arrS[i] = word.split('').reverse().join('');
    }
    return arrS.join(' ');
};
// @lc code=end

