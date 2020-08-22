/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    let map = new Map();
    let charCodeA = 'a'.charCodeAt(0);
    for (let i = 0; i < strs.length; i++) {
        let num = new Array(26);
        for (let j = 0; j < num.length; j++) {
            num[j] = 0;
        }

        for (let k = 0; k < strs[i].length; k++) {
            num[strs[i].charCodeAt(k) - charCodeA]++;
        }
        let key = num.join('#');
        if (map.has(key)) {
            let hasVal = map.get(key)
            hasVal.push(strs[i]);
            map.set(key, hasVal);
        } else {
            map.set(key, [strs[i]])
        }
    }
    let result = [];
    for (let val of map.values()) {
        result.push(val);
    }
    return result;
};
// @lc code=end

