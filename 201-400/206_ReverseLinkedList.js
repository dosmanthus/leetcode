/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 64 ms, iteratively
  if (!head) return null;
  let prev = head.next;
  head.next = null;
  let current = head;
  let temp;

  while (prev) {
    temp = prev.next;
    prev.next = current;
    current = prev;
    prev = temp;
  }

  return current;
};

var reverseList2 = function(head) {
  // 48 ms, recursively
  if (!head || !(head.next)) return head;

  let reversedHead = reverseList2(head.next);
  head.next.next = head;
  head.next = null;

  return reversedHead;
};
