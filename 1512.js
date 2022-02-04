// 1512. Number of Good Pairs - https://leetcode.com/problems/number-of-good-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */

const numIdenticalPairs = (nums) => {
	let countPairs = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			nums[i] == nums[j] && countPairs++;
		}
	}
	return countPairs;
};
