/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let answer = 0;
    while (true) {
        for (let idx = 0, len = tickets.length; idx < len; idx ++) {
            if (tickets[idx])  {
                if (tickets[idx] === 1 && idx === k) {
                    return ++answer;
                }
                tickets[idx] --;
                answer++;
            }
        }
    }
};