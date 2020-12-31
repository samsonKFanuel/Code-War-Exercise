### Kata:

[Order words](https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript)

#### Description

Sort a given string

#### Task:

Sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

#### Attention:

Numbers can be from 1 to 9. So 1 will be the first word (not 0).

#### Example

- "is2 Thi1s T4est 3a" should return "Thi1s is2 3a T4est"
- "4of Fo1r pe6ople g3ood th5e the2" should return "Fo1r the2 g3ood 4of th5e pe6ople"

```javascript
const order = (words) => {
  if (!words.length) {
    return "";
  }
  const nums = words.match(/\d/g);
  const wds = words.split(" ");

  return words
    .match(/\d/g)
    .sort()
    .map((n) => wds[nums.indexOf(n)])
    .join(" ");
};

const assert = require("assert").strict;

assert.equal(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
assert.equal(
  order("4of Fo1r pe6ople g3ood th5e the2"),
  "Fo1r the2 g3ood 4of th5e pe6ople"
);
assert.equal(order(""), "");
```
