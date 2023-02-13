var processor = function(str) {
    let answer = "";
    for (let idx = 0, len = str.length; idx < len; idx ++) {
        let temp = str[idx];
        if (temp === '#') {
            let answerLen = answer.length;
            if (answerLen) {
                answer = answer.slice(0, answerLen - 1);                    
            }
        } else {
            answer += (temp);
        }
    }
    //console.log(answer)
    return answer;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return processor(s) === processor(t);
};