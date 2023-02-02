/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let answer = 0;
    while (sandwiches.length) {
        let std = students[0], sdw = sandwiches[0];
        if (students.indexOf(sdw) < 0) {
            answer = students.length;
            break;
        }
        students.shift();
        if (std === sdw) {
            sandwiches.shift();
        } else {
            students.push(std);
        }
    }
    return answer;
};