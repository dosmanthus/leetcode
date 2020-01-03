
// nums1會有足夠的空間可以放入兩個陣列(nums1.length = m+n)，
// m為nums1的元素數量，n為nums2的元素數量
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // nums1取m: [1, 2, 3(i)]
  // nums2取n: [2, 5, 6(j)]
  // 合併後的nums1長度爲m+n: [1, 2, 3, null, null, null(p)]
  // i、j中較大的放入p
  let i = m - 1,
      j = n - 1,
      p = m + n - 1;

  // 84ms
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[p] = nums1[i];
      i--;
    } else {
      nums1[p] = nums2[j];
      j--;
    }
    p--;

    // 也可以寫成 76ms
    // nums1[p--] = (i >= 0 && nums1[i] > nums2[j]) ? nums1[i--] : nums2[j--];
  }

  return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); // [1,2,2,3,5,6]

var mergeWithOptimzedBubbleSort = function(nums1, m, nums2, n) {
  // 氣泡排序法(Bubble Sort)，時間複雜度O(n^2)
  // 氣泡排序法核心觀念為比較任兩個相鄰項目，
  // 如果第一個比第二個大，則交換兩個數字，
  // 重複進行比較到最後。元素會如同氣泡一樣從水裡往上浮至正確位置。
  // https://pjchender.blogspot.com/2017/09/bubble-sort.html
  const l = m + n;
  // 將nums2加入nums1中
  for (let i = 0; i <= n - 1; i++) {
    const element = nums2[i];
    nums1[m + i] = element;
  }

  // 排序 64ms
  // for (let i = 0; i < l; i++) {
  //   for (let j = 0; j < l - 1; j++) {
  //     if (nums1[j] > nums1[j + 1]) {
  //       let temp = nums1[j];
  //       nums1[j] = nums1[j + 1];
  //       nums1[j + 1] = temp;
  //     }
  //   }
  // }

  // 優化： 如果修改成內圈減外圈的輪數，可以避免不必要的比較。同時也加上 flag 記錄交換情形
  // 56 ms
  let swapped = true;
  for (let i = 0; i < l && swapped; i++) {
    swapped = false;
    for (let j = 0; j < l - i - 1; j++) {
      if (nums1[j] > nums1[j + 1]) {
        let temp = nums1[j];
        nums1[j] = nums1[j + 1];
        nums1[j + 1] = temp;
        swapped = true;
      }
    }
  }

  return nums1;
}

console.log(mergeWithOptimzedBubbleSort([1,2,3,0,0,0], 3, [2,5,6], 3)); // [1,2,2,3,5,6]
