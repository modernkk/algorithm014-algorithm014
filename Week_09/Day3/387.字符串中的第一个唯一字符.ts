/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
    let map = new Map<string, any>();
    
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (map.has(c)) {
            let v = map.get(c);
            map.set(c, { count: v.count + 1, index: v.index });
        } else {
            map.set(c, { count: 1, index: i });
        }
    }
    let res = -1;
    for (let value of map.values()) {
        let { count, index } = value;
        if (count === 1) {
            res = res === -1 ? index : Math.min(res, index);
        }
    }
    return res;
};
// @lc code=end

