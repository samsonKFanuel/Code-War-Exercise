### Kata: 
[String incrementer](https://www.codewars.com/kata/54a91a4883a7de5d7800009c)
#### Description
Given a word that may or may not end with number/s

#### Task:
* If there is number at the end of the string increment by 1
* If not add (concatenate) the number '1' to the end.

#### Example: 
* incrementString('Test10') should return Test11
* incrementString('Test') should return Test1

#### Attention:
0's at the begining of the number should be considered.

#### Example
 * incrementString('Test0099') should return Test0100
 * incrementString('Test0094') should return Test0095

___________________________________________________________________________

```javascript
const isNumber = (ch) => /\d/.test(ch);

const incrementString = (strng) => {
    var i = strng.length;
    const ch = strng.charAt(i - 1)

    if (isNumber(ch)) {
        if (ch === '9') {
            while (isNumber(strng[i - 1])) {
                i--;
            }
            if (strng[i] === '0' && strng[i + 1] === '0') {
                i++;
            }
            return strng.slice(0, i) + (parseInt(strng.slice(i), 10) + 1);
        }
        return strng.slice(0, i - 1) + (parseInt(ch, 10) + 1);
    }

    else return strng + 1;
}


const assert = require('assert').strict;

assert.equal(incrementString('Test'), 'Test1');
assert.equal(incrementString('Test042'), 'Test043');
assert.equal(incrementString('Test1000'), 'Test1001');
assert.equal(incrementString('Test99'), 'Test100');
assert.equal(incrementString('Test099'), 'Test100');
assert.equal(incrementString('Test0099'), 'Test0100');
```