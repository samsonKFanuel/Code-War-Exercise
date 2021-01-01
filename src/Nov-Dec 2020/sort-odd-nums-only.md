### Kata:

[Sort the Odd](https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript)

#### Description

Sort only the odd numbers in an array of integers.

#### Task:

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions. Examples

- [7, 1] => [1, 7]
- [5, 8, 6, 3, 4] => [3, 8, 6, 5, 4]

```javascript
const sortArray = (array) => {
  const compare = (a, b) => a - b;

  const oddNums = array.filter((n) => n % 2 !== 0).sort(compare);
  var i = 0;

  return array.map((n) => (n % 2 === 0 ? n : oddNums[i++]));
};

const assert = require("assert").strict;

assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
assert.deepEqual(sortArray([]), []);
```
