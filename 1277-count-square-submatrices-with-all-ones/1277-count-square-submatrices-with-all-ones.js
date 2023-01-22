/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let arr = [];
    let answer = 0;
    let row = matrix.length, col = matrix[0].length;
    let temp = [];
    for (let r = 0; r < row; r ++) {
        for (let c = 0; c < col; c ++) {
            if (matrix[r][c] === 1) {
                temp.push([r, c]);
                answer ++;
            }                    
        }
    }
    arr[1] = temp;

    let index = 2, maxSize = Math.min(row, col);
    while (index <= maxSize) {
        let prevArr = arr[index - 1];
        let temp = [];
        for (let p = 0, len = prevArr.length; p < len; p++) {
            let point = prevArr[p];
            
            let x = point[0], y = point[1];
            let maxCol = col - index, maxRow = row - index;
            if (x <= maxRow && y <= maxCol) {
                let flag = true;
                for (let cIdx = 0; cIdx < index; cIdx ++) {
                    for (let rIdx = 0; rIdx < index; rIdx ++) {
                        if (!matrix[x + rIdx][y  + cIdx]) {
                            flag = false;
                        }
                    }   
                }
                if (flag) {
                    temp.push(point);
                    answer ++;

                }
            }
        }
        arr[index] = temp;
        index ++;
    }
    return answer;
};