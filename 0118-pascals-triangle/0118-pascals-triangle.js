/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	let answer = [];
	for (let rIdx = 0; rIdx < numRows; rIdx++) {
		let temp = [];
		for (let cIdx = 0; cIdx <= rIdx; cIdx++) {
			if (!cIdx || cIdx === rIdx) {
				temp.push(1);
			} else {
				temp.push(answer[rIdx - 1][cIdx - 1] + answer[rIdx - 1][cIdx]);
			}
		}
		answer.push(temp);
	}
	return answer;
};