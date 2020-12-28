const isPrime = (n) => {
    const maxRange = Math.floor(n / 2);
    for (let i = 2; i < maxRange; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
};

const gap = (g, m, n) => {
    var lastPrime = 0;

    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            if (lastPrime !== 0 && g === (i - lastPrime)) {
                return [lastPrime, i];
            }
            else {
                lastPrime = i;
            }
        }
    }
    return null;
};

const assert = require('assert');

assert.deepStrictEqual(gap(2, 100, 110), [101, 103]);
assert.deepStrictEqual(gap(4, 100, 110), [103, 107]);

