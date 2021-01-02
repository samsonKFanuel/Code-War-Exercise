### Kata:

[Count the smiley faces](https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript)

#### Description

Count smiley faces in a given array.

#### Task:

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

##### Rules for a smiling face:

- Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
- A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
- Every smiling face must have a smiling mouth that should be marked with either ) or D

N.B.

- Valid smiley face examples: :) :D ;-D :~)
- Invalid smiley faces: ;( :> :} :]

#### Example:

- [":D", ":~)", ";~D", ":)"] should return 4
- [":)", ":(", ":D", ":O", ":;"] should return 2

#### Attention:

No additional characters are allowed except for those mentioned.

```javascript
const countSmileys = (arr) => {
  return arr.length
    ? arr.filter((w) => w.match(/[:;](-|~)?[)D]/) !== null).length
    : 0;
};

const assert = require("assert").strict;

assert.equal(countSmileys([]), 0);
assert.equal(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
assert.equal(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
assert.equal(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
```
