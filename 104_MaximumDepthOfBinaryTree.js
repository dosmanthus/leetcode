// DFS(Depth-first Search)深度優先搜尋法
// 屬於盲目搜索(uninformed search)是利用堆疊(Stack)來處理，通常以遞迴的方式呈現。
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
var maxDepth = function(root) {
  // recursive, 自底向上
  // 結果爲left、right子樹深度的較大值+1
  // 60 ms
  if(!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepth2 = function(root) {
  // iterative, 往下一層+1
  // 68 ms
  let stack = [];
  let depth = 0;

  if(root) stack.push(root);

  while (stack.length  > 0) {
    let newStack = []

    while (stack.length > 0) {
      let current = stack.pop();

      if(current.left) newStack.push(current.left);
      if(current.right) newStack.push(current.right);
    }

    stack = newStack;
    depth++;
  }

  return depth;
};
