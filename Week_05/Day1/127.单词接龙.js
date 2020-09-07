/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
function ladderLength(beginWord, endWord, wordList) {
    let L = beginWord.length;
    let allComboDict = new Map();
    for (let word of wordList) {
        for (let i = 0; i < L; i++) {
            let newWord = word.substring(0, i) + "*" + word.substring(i + 1, L);
            let comList = [];
            if (allComboDict.has(newWord)) {
                comList = allComboDict.get(newWord);
            }
            comList.push(word);
            allComboDict.set(newWord, comList);
        }
    }
    let Q = [];
    Q.push({
        key: beginWord,
        level: 1,
    });
    let visited = new Map();
    visited.set(beginWord, true);
    while (Q.length !== 0) {
        let node = Q.shift();
        let { key, level } = node;
        for (let i = 0; i < L; i++) {
            let newWord = key.substring(0, i) + "*" + key.substring(i + 1, L);
            let comList = [];
            if (allComboDict.has(newWord)) {
                comList = allComboDict.get(newWord);
            }
            for (let t of comList) {
                if (t === endWord) {
                    return level + 1;
                }
                if (!visited.has(t)) {
                    visited.set(t, true);
                    Q.push({
                        key: t,
                        level: level + 1,
                    })
                }
            }
        }
    }
    return 0;
};
// @lc code=end

