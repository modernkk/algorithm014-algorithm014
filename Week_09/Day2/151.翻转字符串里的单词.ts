/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
function reverseWords(s: string): string {
    let arr = s.split(' ');
    let len = arr.length;
    let result = '';
    for (let i = len - 1; i >= 0; i--) {
        let word = arr[i];
        if (word.trim() !== '') {
            result = result ? `${result} ${word}`: `${word}`;
        }
    }
    return result;
};
// @lc code=end

