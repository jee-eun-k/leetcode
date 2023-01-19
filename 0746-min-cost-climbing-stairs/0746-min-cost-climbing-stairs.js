/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let len = cost.length;
    var memoArray = Array(len + 2).fill(0);
    memoArray[1] = cost[0];
    for (let idx = 2; idx <= len + 1; idx ++) {
        let oneBefore = memoArray[idx - 1];
        let twoBefore = memoArray[idx - 2];
        let c = idx < len + 1 ? cost[idx - 1] : 0;
        memoArray[idx] = (oneBefore < twoBefore ? oneBefore: twoBefore) + c;
    }
    return memoArray[len + 1];
};