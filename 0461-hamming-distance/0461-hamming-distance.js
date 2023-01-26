var hammingDistance = function(x, y) {
    let answer = 0;
    let a = [], b= [];
    var convertNumber = function(number, arr = []) {
        if (number === 0) {
            return arr;
        }
        let left = number % 2;
        let share = left ? (number - 1) / 2 : number / 2;
        arr.push(left);
        convertNumber(share, arr);

    };
    convertNumber(x, a);
    convertNumber(y, b);
    let len = Math.max(a.length, b.length);
    for (let idx = len - 1; idx >= 0; idx --) {
        let tempA = a[idx] || 0;
        let tempB = b[idx] || 0;
        answer += (tempB ^ tempA);
    }
    return answer;
};