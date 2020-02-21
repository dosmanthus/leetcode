/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // 56 ms
  let current = head;
  while (current) {
    if (current.flag) return true;
    current.flag = true;
    current = current.next;
  }
  return false;
};

var hasCycle2 = function(head) {
  // 快慢指針，如果是一個循環連結，快慢指針一定會相遇
  // 68 ms
  if (!head || !head.next) return false;
  let slow = head.next;
  let fast = head.next.next;
  if (!fast) return false;

  while (slow != fast) {
    if (!fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;

    if (!slow || !fast) return false;
  }

  return true;
};
