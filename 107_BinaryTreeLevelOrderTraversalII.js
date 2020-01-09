/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  // iterative, 52 ms
  let result = [];
  let currentLevel = [];
  if (root !== null) {
    currentLevel.push(root);
    result.push([root.val]);

    while (currentLevel.length > 0) {
      let newLevel = [];

      while (currentLevel.length > 0) {
        let current = currentLevel.shift();
        if (current.left) newLevel.push(current.left);
        if (current.right) newLevel.push(current.right);
      }

      if (newLevel.length > 0) result.unshift(newLevel.map(item => item.val));
      currentLevel = newLevel;
    }
  }
  return result;
};

var levelOrderBottom2 = function (root) {
  // recursive, 56 ms
  let result = [];
  levelRecursion(root, 0);

  function levelRecursion(node, level) {
    if (!node) return;

    if (!result[level]) {
      result[level] = [];
    }

    result[level].push(node.val);

    levelRecursion(node.left, level + 1);
    levelRecursion(node.right, level + 1);
  }

  return result.reverse();
};
