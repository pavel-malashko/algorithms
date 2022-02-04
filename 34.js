// 34. Find First and Last Position of Element in Sorted Array - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
	let arr = [],
		beginPos = nums.indexOf(target),
		endPos = nums.lastIndexOf(target);
	arr.push(beginPos, endPos);
	return arr;
};
