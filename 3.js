// 3. Longest Substring Without Repeating Characters -  https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
	let symLen = s.length,
		maxLen = 0,
		maxStr = "",
		symStr,
		pos;

	for (let i = 0; i < symLen; i++) {
		symStr = s[i];
		pos = maxStr.indexOf(symStr);

		if (pos > -1) {
			maxStr = maxStr.substring(pos + 1);
		}

		maxStr += symStr;
		maxLen = Math.max(maxLen, maxStr.length);
	}
	return maxLen;
};
