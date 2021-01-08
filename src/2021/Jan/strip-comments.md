### Kata:

[remove comments](https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript)

#### Description

Strip comments.

#### Task:

Given a set of lists with/without comments. Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out. Comment characters are not the same and are given in array.

#### Example:

##### Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

##### The output expected would be:

apples, pears
grapes
bananas

```javascript
const removeComments = (input, markers) => {
  const re = new RegExp(`[${markers.join("")}]`);

  return input
    .split("\n")
    .map((ln) => {
      const pos = ln.search(re);
      if (pos === -1) {
        return ln.trim();
      }
      return ln.slice(0, pos).trim();
    })
    .join("\n");
};

const assert = require("assert").strict;

assert.equal(
  removeComments("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ]),
  "apples, plums\npears\noranges"
);
assert.equal(removeComments("Q @b\nu\ne -e f g", ["@", "-"]), "Q\nu\ne");
```
