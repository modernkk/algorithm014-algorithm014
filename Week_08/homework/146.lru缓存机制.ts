/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
class LRUCache {
    cache: Map<any, any>;
    capacity: number;
    constructor(capacity: number) {
      this.cache = new Map();
      this.capacity = capacity;
    }
  
    get(key: number): number {
      if (this.cache.has(key)) {
        const temp: any = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, temp);
        return temp;
      }
      return -1;
    }
  
    put(key: number, value: number): void {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      } else if (this.cache.size >= this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
      }
      this.cache.set(key, value);
    }
  }

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

