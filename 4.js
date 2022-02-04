// 4. Median of Two Sorted Arrays -  https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays = function (nums1, nums2) {
	const arr = nums1.concat(nums2).sort((a, b) => a - b),
		median = (arr.length - 1) / 2,
		remainder = median % 1;
	if (remainder) {
		const m1 = median - remainder,
			m2 = m1 + 1;
		return (arr[m1] + arr[m2]) / 2;
	} else {
		return arr[median];
	}
};
