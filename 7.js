// 7. Reverse Integer - https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
	let sign = x;
	let maxInteger = 2147483647;
	if (sign >= 0) sign = "";
	else sign = "-";
	x = sign + Math.abs(x).toString().split("").reverse().join("");
	return x <= maxInteger && x >= -maxInteger ? x : 0;
};
