/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
    let needs = new Map<string, number>();
    let windowMap = new Map<string, number>();
    let left = 0;
    let right = 0;
    let valid = 0;
    let res: number[] = [];
    for (let i = 0; i < p.length; i++) {
        let c = p[i];
        if (needs.has(c)) {
            needs.set(c, (needs.get(c) || 0) + 1);
        } else {
            needs.set(c, 1);
        }
    }
    while (right < s.length) {
        let sr = s[right];
        right++;
        if (needs.has(sr)) {
            if (windowMap.has(sr)) {
                windowMap.set(sr, (windowMap.get(sr) || 0) + 1);
            } else {
                windowMap.set(sr, 1);
            }
            if (needs.get(sr) === windowMap.get(sr)) {
                valid++;
            }
        }
        while (right - left >= p.length) {
            if (valid === needs.size) {
                res.push(left)
            }
            let sl = s[left];
            left++;
            if (needs.has(sl)) {
                if (windowMap.get(sl) === needs.get(sl)) {
                    valid--;
                }
                windowMap.set(sl, (windowMap.get(sl) || 0) - 1);
            }
        }
    }
    return res;
};
// @lc code=end

