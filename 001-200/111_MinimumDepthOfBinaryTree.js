/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  // iterative, 往下, 48 ms
  let stack = [],
      depth = 0;

  if(root) stack.push(root);

  while (stack.length > 0) {
    depth += 1;
    let newStack = [];

    while (stack.length > 0) {
      let current = stack.pop();

      if (!current.left && !current.right) return depth;
      if (current.left) newStack.push(current.left);
      if (current.right) newStack.push(current.right);
    }

    stack = newStack;
  }

  return depth;
};

var minDepth2 = function(root) {
  // BFS 廣度優先搜尋, 56 ms
  if (!root) return 0;
  let queue = [[root, 1]];

  while (queue.length > 0) {
    let current = queue.shift(),
        node = current[0],
        depth = current[1];

    if (!node.left && !node.right) return depth;
    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
};

var minDepth3 = function(root) {
  // DFS 深度優先搜尋法, recursive, 52 ms
  if (!root) return 0;
  let result = Infinity;

  function minHeight(root, depth) {
    if (!root.left && !root.right) {
      result = Math.min(result, depth);
    }

    if (root.left) minHeight(root.left, depth + 1);
    if (root.right) minHeight(root.right, depth + 1);
  }

  minHeight(root, 1);

  return result;
};
