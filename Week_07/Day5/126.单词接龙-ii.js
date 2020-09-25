/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
function findLadders(beginWord, endWord, wordList) {
    let wordId = new Map();
    let idWord = [];

    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i];
        if (!wordId.has(word)) {
            wordId.set(word, i);
            idWord.push(word);
        }
    }

    if (!wordId.has(endWord)) {
        return [];
    }

    if (!wordId.has(beginWord)) {
        wordId.set(beginWord, wordId.size);
        idWord.push(beginWord);
    }
    let idLen = idWord.length;
    let edges = [];
    for (let j = 0; j < idLen; j++) {
        edges[j] = [];
    }

    for (let i = 0; i < idLen - 1; i++) {
        for (let j = i + 1; j < idLen; j++) {
            if (transformCheck(idWord[i], idWord[j])) {
                edges[i].push(j);
                edges[j].push(i);
            }
        }
    }
    let res = [];
    let cost = [];
    for (let i = 0; i < idLen; i++) {
        cost[i] = Infinity;
    }

    let q = [];
    let beginId = wordId.get(beginWord);
    let tmpBegin = [];
    tmpBegin.push(beginId);
    q.push(tmpBegin);
    cost[beginId] = 0;
    const dest = wordId.get(endWord);

    while (q.length > 0) {
        let now = q.shift();
        let last = now[now.length - 1];
        if (last === dest) {
            let tmp = [];
            for (let i = 0; i < now.length; i++) {
                tmp[i] = idWord[now[i]];
            }
            res.push(tmp);
        }
        for (let j = 0; j < edges[last].length; j++) {
            let to = edges[last][j];
            if (cost[last] + 1 <= cost[to]) {
                cost[to] = cost[last] + 1;
                let tmp = [...now];
                tmp.push(to);
                q.push(tmp);
            }
        }
    }
    return res;
};
function transformCheck(str1, str2) {
    let differences = 0;
    let len = str1.length;
    for (let i = 0; i < len; i++) {
        if (str1[i] !== str2[i]) {
            differences += 1;
        }
    }
    return differences === 1;
}


// @lc code=end

