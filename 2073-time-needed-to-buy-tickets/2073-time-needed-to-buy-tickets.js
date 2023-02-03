/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let timeArray = Array(tickets.length).fill(0);
    let answer = 0;
    while (tickets.length) {
        for (let idx = 0; idx < tickets.length; idx ++) {
            if (tickets[idx] !== 0)  {
                if (tickets[idx] === 1 && idx === k) {
                    return ++answer;
                }
                tickets[idx] --;
                answer++;
            }
        }
    }
};