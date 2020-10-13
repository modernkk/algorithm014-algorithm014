/*
 * @lc app=leetcode.cn id=917 lang=typescript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
function reverseOnlyLetters(S: string): string {
    let arrS = S.split('');
    let len = arrS.length;
    let left = 0;
    let right = len - 1;
    let reg = /[a-zA-Z]/;
    while (left < right) {
        let vl = arrS[left];
        let vr = arrS[right];
        if (reg.test(vl) && reg.test(vr)) {
            let tmp = vl;
            arrS[left] = vr;
            arrS[right] = tmp;
            left++;
            right--;
        } else if (!reg.test(vl) && reg.test(vr)) {
            left++;
        } else if (reg.test(vl) && !reg.test(vr)) {
            right--;
        } else if (!reg.test(vl) && !reg.test(vr)) {
            left++;
            right--;
        }
    }
    return arrS.join('');
};
// @lc code=end

