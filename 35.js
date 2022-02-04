// 35. Search Insert Position - https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
	let min = Math.min(...nums),
		max = Math.max(...nums);
	for (let i = 0; i <= nums.length; i++) {
		if (target > max) return nums.length;
		if (target < min) return 0;
		if (nums[i] < target && nums[i + 1] > target) return i + 1;
		if (target == nums[i]) return i;
	}
};
