### Sum Strings as Numbers

#### Description
calculates the sum of two integers given as strings

#### Task
Given the string representations of two integers, return the string representation of the sum of those integers.

#### Attn:
A string representation of an integer will contain no characters besides the ten numerals

``` javascript

const sumStrings = (a, b) => {
    const aa = a.replace(/^0+/, '').split('');
    const ab = b.replace(/^0+/, '').split('');

    var carry = 0, sum = '', temp = 0;
    while(ab.length || aa.length || carry) {
        let n1 = parseInt(aa.pop(), 10);
        let n2 = parseInt(ab.pop(), 10);
        n1 = isNaN(n1) ? 0 : n1; 
        n2 = isNaN(n2) ? 0 : n2;
        temp = carry + n1 + n2;
        sum = (temp % 10) + sum;
        carry = temp > 9 ? 1 : 0;
    }
    return sum;
}

const assert = require('assert').strict;

assert.equal(sumStrings('5', ''), '5')
assert.equal(sumStrings('99', '1'), '100')
assert.equal(sumStrings('800', '9567'), '10367')
assert.equal(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'), '131151201344081895336534324866');

```
