function filter_list(l) {
    return l.filter(el => Number.isInteger(el));
}

const assert = require('assert').strict;

assert.deepEqual(filter_list([1, '1', 'ab', 2, 123]), [1, 2, 123]);
assert.deepEqual(filter_list([1, '1']), [1]);

/*
* returns all integers in a given array
*/