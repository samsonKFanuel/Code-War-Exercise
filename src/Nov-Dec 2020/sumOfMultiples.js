function solution(number) {
  if (number < 0) {
    return 0;
  }

  var i = 1, sum = 0;

  while (i < number) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
    i++;
  }
  return sum;
}

const assert = require('assert').strict;

assert.equal(solution(10), 23);
assert.equal(solution(15), 45);