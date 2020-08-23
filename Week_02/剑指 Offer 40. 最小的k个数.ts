class MaxHeap {
    container: number[] = [];
    constructor(arr: number[]) {
        if (Array.isArray(arr)) {
            arr.forEach(this.insert.bind(this));
        }
    }
    insert(data: number) {
        this.container.push(data);
        let index = this.container.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (this.container[parent] > this.container[index]) {
                break;
            }
            swap(this.container, index, parent);
            index = parent;
        }
    }
    extract() {
        if (!this.container.length) {
            return null;
        }
        swap(this.container, 0, this.container.length - 1);
        let res = this.container.pop();
        let len = this.container.length;
        let index = 0;
        let exchange = 2 * index + 1;
        while (exchange < len) {
            let right = 2 * index + 2;
            if (right < len && this.container[right] > this.container[exchange]) {
                exchange = right;
            }
            if (this.container[exchange] < this.container[index]) {
                break;
            }
            swap(this.container, index, exchange);
            index = exchange;
            exchange = 2 * index + 1;
        }
        return res;
    }
    top() {
        if (this.container.length) {
            return this.container[0];
        }
        return null;
    }
}
function getLeastNumbers(arr: number[], k: number): number[] {
    if (arr.length <= k) {
        return arr;
    }
    let maxHeap = new MaxHeap(arr.slice(0, k));
    for (let i = k; i < arr.length; i++) {
        let top = maxHeap.top();
        if (top === null) {
            return [];
        } else if (arr[i] < top) {
            maxHeap.extract();
            maxHeap.insert(arr[i]);
        }
    }
    return maxHeap.container;
};
function swap(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}