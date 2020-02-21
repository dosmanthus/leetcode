/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;

  let node = head,
    prev = null;

  while (node) {
    if (node.val === val) {
      // checking if the first node in the linkedlist needs to be deleted
      if (!prev) {
        head = head.next;
      } else {
        prev.next = node.next;
      }
    } else {
      prev = node;
    }
    node = node.next;
  }
  return head;
};


var removeElements2 = function (head, val) {
  if (!head) return null;

  let node = new ListNode();
  node.next = head;
  let previous = node;

  while (head) {
    if (head.val !== val) {
      previous = head;
    } else {
      previous.next = head.next;
    }
    head = head.next;
  }

  return node.next;
};
