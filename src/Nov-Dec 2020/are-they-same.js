function comp(array1, array2) {
    if ((!array1 || !array2) || array1.length !== array2.length) {
        return false;
    }
    const sortedArr2 = array2.sort();
    return array1.map(n => n * n).sort().every((n, i) => n === sortedArr2[i]);
}

const assert = require('assert').strict;

assert.equal(comp([45, 81, 68, 46, 46, 64], [2025, 6561, 4624, 2117, 2116, 4096]), false);
assert.equal(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]), true);

/**
 * compares array1 with array2
 * all elements in array2 should squares of the elements in array1
 */