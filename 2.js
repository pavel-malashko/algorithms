// 2. Add Two Numbers -  https://leetcode.com/problems/add-two-numbers/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
	if (!l1 || !l2) {
		return l1 || l2;
	}

	return doSum(l1, l2, 0);
};

function doSum(l1, l2, curried) {
	if (!l1 && !l2) {
		return curried > 0 ? new ListNode(curried) : null;
	}

	const sum = curried + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
	const curry = Math.floor(sum / 10);
	const res = new ListNode(sum % 10);

	res.next = doSum(l1 ? l1.next : null, l2 ? l2.next : null, curry);

	return res;
}
