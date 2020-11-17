var uniqueInOrder = function (iterable) {
    const itr = typeof (iterable) === 'string' ? iterable.split('') : iterable;

    return itr.filter((ch, i) => ch !== iterable[i - 1])
}

const assert = require('assert').strict;

assert.deepStrictEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
assert.deepStrictEqual(uniqueInOrder([1, 2, 1, 3, 3, 1, 1, 5]), [1, 2, 1, 3, 1, 5]);