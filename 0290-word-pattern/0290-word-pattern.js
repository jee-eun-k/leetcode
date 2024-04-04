/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
	const pMap = {};
	const sMap = {};
	pattern = pattern.split('');
	s = s.split(' ');
	if (pattern.length !== s.length) {
		return false;
	}
	
	for (let idx = 0, len = pattern.length; idx < len; idx ++) {
		const p = pattern[idx];
		const char = s[idx];
		if (!pMap['p_' + p] && !sMap['s_' + char]) {
			pMap['p_' + p] = char;
			sMap['s_' + char] = p;
		} else if (pMap['p_' + p] !== char || sMap['s_' + char] !== p) {
			return false;
		}
	}

	return true;
};