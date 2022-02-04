// 1672. Richest Customer Wealth - https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */

const maximumWealth = (accounts) => {
	let maxWealth = 0;
	for (let i = 0; i < accounts.length; i++) {
		maxWealth = Math.max(
			maxWealth,
			accounts[i].reduce((sum, val) => sum + val)
		);
	}
	return maxWealth;
};
