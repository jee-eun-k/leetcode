/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let answerArray = [];
    for (let idx = 0; idx <= rowIndex; idx ++) {
        let temp = [];
            for (let sIdx = 0; sIdx <= idx; sIdx ++) {
                if (!sIdx || sIdx === idx) {
                    temp[sIdx] = (1);
                } else {
                    let prevRow = answerArray[idx - 1];
                    temp.push(prevRow[sIdx-1] + prevRow[sIdx]);
                }          
            }
        answerArray.push(temp);       
    }
    return answerArray[rowIndex];
};