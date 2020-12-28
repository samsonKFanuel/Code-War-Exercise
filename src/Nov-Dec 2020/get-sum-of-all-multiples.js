function solution(number) {
    let sum = 0;

    for(i = 3; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

const assert = require('assert').strict;

assert.equal(solution(10), 23);

/*
* returns sum of all multiples of 3 and 5.
* If a number is a multiple of both 3 and 5, then add it only once.
*/