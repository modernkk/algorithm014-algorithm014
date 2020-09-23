/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class TrieNode {
    private links: TrieNode[] | undefined[];
    private R: number = 26;
    private isEnd: boolean = false;

    constructor() {
        this.links = new Array(this.R);
    }
    private getIndex(key: string): number | undefined {
        let charCodeA = 'a'.charCodeAt(0);
        let charCodeKey = key.charCodeAt(0);
        if (!charCodeKey) {
            return undefined;
        }
        return charCodeKey - charCodeA;
    }
    public containsKey(key: string): boolean {
        let i = this.getIndex(key);
        if (i === undefined) {
            return false;
        }
        return this.links[i] !== undefined;
    }
    public get(key: string): TrieNode | undefined {
        let i = this.getIndex(key);
        if (i === undefined) {
            return undefined;
        }
        return this.links[i];
    }
    public put(key: string, node: TrieNode) {
        let i = this.getIndex(key);
        if (i !== undefined) {
            this.links[i] = node;
        }
    }
    public setEnd() {
        this.isEnd = true;
    }
    public isEnds(): boolean {
        return this.isEnd;
    }
}
class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let len = word.length;
        let node: TrieNode | null = this.root;
        for (let i = 0; i < len; i++) {
            let currentChar = word[i];
            let res = node && node.containsKey(currentChar);
            if (!res) {
                node && node.put(currentChar, new TrieNode());
            }
            node = (node && node.get(currentChar)) || null;
        }
        node && node.setEnd();
    }

    private searchPrefix(word: string) {
        let len = word.length;
        let node: TrieNode | null = this.root;
        for (let i = 0; i < len; i++) {
            let currentLetter: string = word[i];
            if (!(node && node.containsKey(currentLetter))) {
                return null;
            }
            node = (node && node.get(currentLetter)) || null;
        }
        return node;
    }

    search(word: string): boolean {
        let trieNode = this.searchPrefix(word);
        return trieNode !== null && trieNode.isEnds();
    }

    startsWith(prefix: string): boolean {
        let node: TrieNode | null = this.root;
        let len = prefix.length;
        for (let i = 0; i < len; ++i) {
            let itemStr = prefix[i];
            if (!(node && node.containsKey(itemStr))) {
                return false;
            }
            node = (node && node.get(itemStr)) || null;
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

