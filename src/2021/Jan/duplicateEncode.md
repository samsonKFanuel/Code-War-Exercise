### Kata:

[Duplicate Encode](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript)

#### Description

Convert RGB to Hex representation

#### Task:

Given a string, convert it to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

#### Example:

- "din" should return "((("
- "recede" should return "()()()"
- "Success" should return ")())())"
- "(( @" should return "))(("

```javascript
const duplicateEncode = (word) => {
  const occurencesCount = {};
  word.split("").forEach((ch) => {
    ch = ch.toLowerCase();
    if (occurencesCount[ch]) {
      occurencesCount[ch] += 1;
    } else {
      occurencesCount[ch] = 1;
    }
  });

  return word
    .split("")
    .map((ch) => {
      ch = ch.toLowerCase();
      if (occurencesCount[ch] > 1) {
        return ")";
      }
      return "(";
    })
    .join("");
};

const assert = require("assert").strict;

assert.equal(duplicateEncode("din"), "(((");
assert.equal(duplicateEncode("recede"), "()()()");
assert.equal(duplicateEncode("Success"), ")())())", "should ignore case");
assert.equal(duplicateEncode("(( @"), "))((");
```
