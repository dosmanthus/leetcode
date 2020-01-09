// BFS(Breadth-First Search) 廣度優先搜尋

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
var levelOrder = function(root) {
  let result = [];
  if (root !== null) {
    // BFS模式, 56 ms
    let q = [root];

    while (q.length > 0) {
      let currentLayerNumber = q.length,
          currentLayer = [];

      for (let i = 0; i < currentLayerNumber; i++) {
        let element = q.shift();
        currentLayer.push(element.val);

        if (element.left) q.push(element.left);
        if (element.right) q.push(element.right);
      }

      result.push(currentLayer);
    }
  }
  return result;
};

var levelOrder2 = function(root) {
  // recursive, 52 ms
  let result = [];
  levelRecursion(root, 0);

  function levelRecursion(node, level) {
    if (!node) return;

    if (result.length < level + 1) {
      result.push([]);
    }

    result[level].push(node.val);

    levelRecursion(node.left, level + 1);
    levelRecursion(node.right, level + 1);
  }
  return result;
};
