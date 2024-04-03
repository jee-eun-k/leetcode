/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	let answer = true;
	const map = {};
	for (let idx = 0, len = magazine.length; idx < len; idx ++) {
		const char = magazine[idx];
		if (!map[char]) {
			map[char] = 1;
		} else {
			map[char] ++;
		}
	}
	let j = 0;
	while (j < ransomNote.length) {
		const char = ransomNote[j];
		if (map[char] > 0) {
			map[char] --;
		} else {
			answer = false;
			break;
		}
		j ++;
	}
	return answer;
};