/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
    stack: number[];
    min_stack: number[];
    constructor() {
        this.stack = [];
        this.min_stack = [Infinity];
    }

    push(x: number): void {
        this.stack.push(x);
        this.min_stack.push(Math.min(x, this.min_stack[this.min_stack.length - 1]));
    }

    pop(): void {
        this.stack.pop();
        this.min_stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min_stack[this.min_stack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

