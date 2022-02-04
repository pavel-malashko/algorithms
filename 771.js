// 771. Jewels and Stones - https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

const numJewelsInStones = (jewels, stones) => {
	let count = 0;
	for (let i = 0; i < stones.length; i++) {
		jewels.includes(stones[i]) && count++;
	}
	return count;
};
