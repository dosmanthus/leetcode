/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 如果p, q都比root大，用root.right取代root繼續往下找
  // 88 ms
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root
  }
};

var lowestCommonAncestor2 = function (root, p, q) {
  // 68 ms
  while (root !== null) {
    let val = root.val;
    if (p.val > val && q.val > val) {
      root = root.right;
    } else if (p.val < val && q.val < val) {
      root = root.left;
    } else {
      return root;
    }
  }
  return root;
};
