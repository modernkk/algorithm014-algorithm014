/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
function validPalindrome(s: string): boolean {
    let len = s.length;
    let left = 0;
    let right = len - 1;
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            let flagL = true;
            let flagR = true;
            for (let i = left + 1, j = right; i < j; i++, j--) {
                if (s[i] !== s[j]) {
                    flagL = false;
                    break;
                }
            }
            for (let i = left, j = right - 1; i < j; i++, j--) {
                if (s[i] !== s[j]) {
                    flagR = false;
                    break;
                }  
            }
            return flagL || flagR;
        }
    }
    return true;
};
// @lc code=end

