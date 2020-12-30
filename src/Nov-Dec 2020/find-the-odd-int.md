### Kata:

[Odd one out](https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript)

#### Description:

Find the integer that occurs odd number of times.

#### Task:

Given an array of integers, return the integer that occurs odd number of times.
N.B. There will always be one integer that occurs odd number of times. Examples are given below.

- [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5] should return 5.
- [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5] should return -1.

```javascript
const findOdd = (A) => {
  const occurrences = {};

  A.forEach((n) => {
    if (occurrences[n]) {
      occurrences[n] += 1;
    } else {
      occurrences[n] = 1;
    }
  });

  return parseInt(
    Object.keys(occurrences).find((k) => occurrences[k] % 2 !== 0),
    10
  );
};

const assert = require("assert").strict;

assert.equal(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
  5
);
assert.equal(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
assert.equal(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
assert.equal(findOdd([10]), 10);
assert.equal(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
assert.equal(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
```
