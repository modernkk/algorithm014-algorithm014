/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        let key = s[i];
        let count = 1;
        if (map.has(key)) {
            count = map.get(key) + 1;
        }
        map.set(key, count)
    }
    for (let j = 0; j < t.length; j++) {
        let key = t[j];
        if (!map.has(key)) {
            return false;
        }
        let count = map.get(key);
        map.set(key, --count);
    }
    for (let val of map.values()) {
        if (val !== 0) {
            return false;
        }
    }
    return true;
};
// @lc code=end

