/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const array = s.split('');
    const stack = [];

    while (array.length) {
        const temp = array.pop();
        if ([')', ']', '}'].indexOf(temp) > -1) {
            stack.push(temp);
        } else {
            const peek = stack.pop();
            if (!(temp === '(' && peek === ')') 
                    && !(temp === '{' && peek === '}') 
                    && !(temp === '[' && peek === ']')
            ) {
                return false;
            }
            
        }
    };
    return !!!stack.length;
};