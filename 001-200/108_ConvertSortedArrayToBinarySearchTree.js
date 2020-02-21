/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 每次取數組最中間的節點做為中節點，
  // 左側為左子樹的內容，右側為右子樹的內容，直到不再存在子樹。
  // 68 ms
  if (nums.length === 0) return null;

  const helper = (low, high) => {
    if (low > high) return null;

    const mid = Math.floor((low + high) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = helper(low, mid - 1);
    root.right = helper(mid + 1, high);

    return root;
  }

  return helper(0, nums.length - 1);
};
