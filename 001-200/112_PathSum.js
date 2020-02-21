/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  // 60 ms
  if (!root) return false;

  let leafValues = [],
      queue = [
        [root, 0]
      ];

  while (queue.length > 0) {
    let current = queue.shift();

    let node = current[0],
      value = node.val,
      count = current[1] + value;

    if (!node.left && !node.right) {
      leafValues.push(count);
    }
    if (node.left) queue.push([node.left, count]);
    if (node.right) queue.push([node.right, count]);
  }

  return leafValues.indexOf(sum) > -1;
};


var hasPathSum = function (root, sum) {
  // recursive, 64 ms
  if (!root) return false;
  if (!root.left && !root.right) return root.val === sum;
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
