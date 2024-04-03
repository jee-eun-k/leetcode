/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	digits = digits.reverse();
	const len = digits.length;
	const recursive = (idx) => {
		if (digits[idx] === 9) {
			digits[idx] = 0;
			if (idx === len - 1) {
				digits.push(1);
				return;
			} else {
				recursive(idx + 1);
			}
		} else {
			digits[idx] ++;
			return;
		}
	}
	recursive(0);
	return digits.reverse();
};