// 平衡二叉樹是指，對一棵二叉樹內的”任意“一個節點，
// 其左子樹的最大深度與右子樹的最大深度的差值小於或等於1。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  // 72 ms
  if(!root) return true;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);


  function maxDepth (root) {
    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }
};

var isBalanced2 = function(root) {
  // 72 ms
  if(!root) return true;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);


  function maxDepth (root) {
    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }
};
