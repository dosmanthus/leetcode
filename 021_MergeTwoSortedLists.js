/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode();
  let current = dummyHead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // while (l1) {
  //   current.next = l1;
  //   l1 = l1.next;
  //   current = current.next;
  // }

  // while (l2) {
  //   current.next = l2;
  //   l2 = l2.next;
  //   current = current.next;
  // }

  current.next = l1 || l2;

  return dummyHead.next;
};

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// 鏈結串列: https://ithelp.ithome.com.tw/articles/10217020?sc=rss.iron
// 猫打球解题视频: https://www.youtube.com/watch?v=6ymPLmf55PM

// 實作鏈結串列

function LinkedList() {
  const Node = function (element) {
    this.element = element;
    this.next = null;
  }

  let length = 0;
  let head = null;

  this.append = function (element) {
    // 尾部追加元素

    let node = new Node(element);
    let current;

    if (head === null) {
      // 空串列
      head = node;
    } else {
      // 不爲空，需找到最後一個元素
      current = head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    length += 1;
  }

  this.insert = function (position, element) {
    if (position > -1 && position < length) {
      let node = new Node(element);
      let current = head;
      let previous;
      let index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }

        node.next = current;
        previous.next = node;
      }

      length ++;
      return true;
    } else {
      return false;
    }
  }

  this.removeAt = function(position) {
    // 檢查範圍
    if (position > -1 && position < length) {
      let current = head;
      let index = 0;
      let previous;

      if (position === 0) {
        // 移除第一個
        head = current.next;
      } else {
        // find element and previous element of position
        // set next of previous to element's next
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }

        previous.next = current.next;
      }

      length--;
    } else {
      return null;
    }
  }

  this.remove = function(element) {
    let index = this.indexOf(element);
    this.removeAt(index);
  }

  this.indexOf = function (element) {
    let index = 0;
    let current = head;

    while (current) {
      if (current.element === element) {
        return index;
      } else {
        index++;
        current = current.next;
      }
    }

    return -1;
  }

  this.isEmpty = function () {
    return length === 0;
  }

  this.size = function () {
    return length;
  }

  this.toString = function () {
    let current = head;
    let str = '';

    while (current) {
      str += current.element;
      if(current.next) str += ' -> ';
      current = current.next;
    }

    return str;
  }

  this.getHead = function () {
    return head;
  }
}

var ll = new LinkedList();
ll.append(3);
ll.append(5);
ll.append(6);
ll.insert(1, 1);

console.log(ll.getHead());
