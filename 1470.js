// 1470. Shuffle the Array - https://leetcode.com/problems/shuffle-the-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

const shuffle = (nums, n) => {
	const res = [];
	for (let i = 0; i < n; i++) {
		res.push(nums[i], nums[i + n]);
	}
	return res;
};
