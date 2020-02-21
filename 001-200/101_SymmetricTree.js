// DFS

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
var isSymmetric = function(root) {
  // recursively, 48 ms
  if (!root) return true;
  return isMirror(root.left, root.right);
};

var isMirror = function(t1, t2) {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;
  if (t1.val !== t2.val) return false;
  return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}
