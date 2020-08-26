/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reversePrint(head: ListNode | null): number[] {
    let stack: ListNode[] = [];
    let temp = head;
    while (temp !== null) {
        stack.push(temp);
        temp = temp.next;
    }

    let size = stack.length;
    let result: number[] = new Array(size)
    for (let i = 0; i < size; i++) {
        let node = stack.pop();
        if (node) {
            result[i] = node.val;
        }
    }
    return result;
};