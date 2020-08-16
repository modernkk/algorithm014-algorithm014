/*
 * @lc app=leetcode.cn id=641 lang=typescript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
class MyCircularDeque {
    private capacity: number;
    private arr: number[];
    private front: number;
    private rear: number;

    constructor(k: number) {
        this.capacity = k + 1;
        this.arr = new Array(this.capacity);
        this.front = 0;
        this.rear = 0;
    }

    insertFront(value: number): boolean {
        if (this.isFull()) {
            return false;
        }
        this.front = (this.front - 1 + this.capacity) % this.capacity;
        this.arr[this.front] = value;
        return true;
    }

    insertLast(value: number): boolean {
        if (this.isFull()) {
            return false;
        }
        this.arr[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity;
        return true;
    }

    deleteFront(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        this.front = (this.front + 1) % this.capacity;
        return true;
    }

    deleteLast(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        this.rear = (this.rear - 1 + this.capacity) % this.capacity;
        return true;
    }

    getFront(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.front]
    }

    getRear(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[(this.rear - 1 + this.capacity) % this.capacity];
    }

    isEmpty(): boolean {
        return this.front === this.rear;
    }

    isFull(): boolean {
        return (this.rear + 1) % this.capacity === this.front;
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

