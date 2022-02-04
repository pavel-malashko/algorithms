// 896. Monotonic Array - https://leetcode.com/problems/monotonic-array/

/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = (A) => {
	let inc = true,
		dec = true;
	for (let i = 0; i <= A.length; i++) {
		if (A[i] > A[i + 1]) {
			inc = false;
		}
		if (A[i] < A[i + 1]) {
			dec = false;
		}
	}
	return inc || dec;
};
