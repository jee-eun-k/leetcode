/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
	let idx = 1;
	while (true) {
		if (idx ** 2 > x) {
			break;
		}
		idx ++;
	}
	return idx - 1;
};