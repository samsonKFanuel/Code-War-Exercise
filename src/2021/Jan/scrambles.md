### Kata:

[Scramblies](https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript)

#### Description

Can a given string be constructed from another string?

#### Task:

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

#### Attention:

- Only lower case letters will be used (a-z). No punctuation or digits will be included.
- Performance needs to be considered

#### Example:

- scramble('rkqodlw', 'world') ==> True
- scramble('cedewaraaossoqqyt', 'codewars') ==> True
- scramble('katas', 'steak') ==> False

```javascript
const scramble = (str1, str2) => {
  const str1CharOccurrences = {},
    str2CharOccurrences = {};

  str1.split("").forEach((ch) => {
    if (str1CharOccurrences[ch]) {
      str1CharOccurrences[ch] += 1;
    } else {
      str1CharOccurrences[ch] = 1;
    }
  });

  str2.split("").forEach((ch) => {
    if (str2CharOccurrences[ch]) {
      str2CharOccurrences[ch] += 1;
    } else {
      str2CharOccurrences[ch] = 1;
    }
  });

  return Object.keys(str2CharOccurrences).every(
    (key) =>
      str1CharOccurrences[key] !== null &&
      str1CharOccurrences[key] >= str2CharOccurrences[key]
  );
};

const assert = require("assert").strict;

assert.equal(scramble("rkqodlw", "world"), true);
assert.equal(scramble("cedewaraaossoqqyt", "codewars"), true);
assert.equal(scramble("katas", "steak"), false);
assert.equal(scramble("scriptjava", "javascript"), true);
assert.equal(scramble("scriptingjava", "javascript"), true);
assert.equal(scramble("scriptsjava", "javascripts"), true);
assert.equal(scramble("jscripts", "javascript"), false);
assert.equal(scramble("aabbcamaomsccdd", "commas"), true);
```
