// 1480. Running Sum of 1d Array - https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
	nums.reduce((a, _, i, arr) => (arr[i] += a));
	return nums;
};
