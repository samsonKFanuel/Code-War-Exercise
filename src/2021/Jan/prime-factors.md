### Kata:

[prime in numbers](https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript)

#### Description

Find the prime factor decomposition of n.

#### Task:

Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

"(p1**n1)(p2**n2)...(pk**nk)"
where a ** b means a to the power of b

with the p(i) in increasing order and n(i) empty if n(i) is 1.

#### Example:

- n = 86240 should return "(2**5)(5)(7**2)(11)"

```javascript
const primeFactors = (n) => {
  var i = 2,
    factors = "";

  do {
    var count = 0;
    while (n % i === 0) {
      n = n / i;
      count++;
    }

    if (count) {
      factors += "(" + i + (count === 1 ? "" : "**" + count) + ")";
    }
    i++;
  } while (n > 1);

  return factors;
};

const assert = require("assert").strict;

assert.equal(primeFactors(7775460), "(2**2)(3**3)(5)(7)(11**2)(17)");
assert.equal(primeFactors(692495), "(5)(17)(8147)");
assert.equal(primeFactors(113), "(113)");
```
