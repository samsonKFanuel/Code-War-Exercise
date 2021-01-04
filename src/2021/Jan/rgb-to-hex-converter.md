### Kata:

[RGB to HEX conversion](https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript)

#### Description

Convert RGB to Hex representation

#### Task:

Given rgb decimal representation of colors. Convert it to Hexa-decimal representation. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

#### Example:

- rgb(255, 255, 255) // returns FFFFFF
- rgb(255, 255, 300) // returns FFFFFF
- rgb(0,0,0) // returns 000000
- rgb(148, 0, 211) // returns 9400D3

#### Attention:

Your answer should always be 6 characters long, the shorthand with 3 will not work here.

```javascript
function rgb(r, g, b) {
  const hexRep = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };

  return [r, g, b]
    .map((n) => {
      var num,
        hexArr = [];

      if (n > 255) {
        num = 255;
      } else if (n < 0) {
        num = 0;
      } else {
        num = n;
      }

      do {
        const rem = num % 16;
        hexArr.push(rem < 10 ? rem : hexRep[rem]);
        num = Math.floor(num / 16);
      } while (num > 0);

      return hexArr.length === 1 ? "0" + hexArr[0] : hexArr.reverse().join("");
    })
    .join("");
}

const assert = require("assert").strict;

assert.equal(rgb(0, 0, 0), "000000");
assert.equal(rgb(0, 0, -20), "000000");
assert.equal(rgb(300, 255, 255), "FFFFFF");
assert.equal(rgb(173, 255, 47), "ADFF2F");
assert.equal(rgb(192, 114, 174), "C072AE");
```
