/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // 96 ms
  let diff = getDiff(headA, headB);

  if (diff > 0) {
    while (diff > 0) {
      headA = headA.next;
      diff--;
    }
  } else {
    while (diff < 0) {
      headB = headB.next;
      diff++;
    }
  }

  while (headA) {
    if (!headA.val || !headB.val) {
      headA = headA.next.next;
      headB = headB.next.next;
    } else if (headA.val === headB.val) {
      return headA;
    } else {
      headA = headA.next;
      headB = headB.next;
    }
  }

  return null;

  function getDiff(nodeA, nodeB) {
    let aLength = 0;
    let bLength = 0;

    while (nodeA) {
      aLength++;
      nodeA = nodeA.next;
    }
    while (nodeB) {
      bLength++;
      nodeB = nodeB.next;
    }

    return aLength - bLength;
  }
};

var getIntersectionNode2 = function(headA, headB) {
  // 2 pointers, 兩個指針走過的路程相同，是兩個鏈表的長度之和，所以一定會相等。
  // 92 ms
  var a = headA;
  var b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};
