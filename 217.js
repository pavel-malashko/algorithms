// 217. Contains Duplicate - https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
	const obj = {};
	for (var i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (obj[num]) {
			return true;
		} else {
			obj[num] = true;
		}
	}
	return false;
};
