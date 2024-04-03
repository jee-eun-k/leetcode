/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	let answer = true;
	x = x.toString();
	let left = 0, right = x.length - 1;
	while (left < right) {
		if (x[left] !== x[right]) {
			return false;
		}
		left ++;
		right --;
	}
	return answer;
};