function isValidWalk(walk) {
    const blocks = {};
    if (walk.length !== 10)
        return false;

    walk.forEach(d => blocks[d] = blocks[d] ? blocks[d] + 1 : 1);

    if ((blocks['n'] || blocks['s']) && (blocks['n'] !== blocks['s'])) {
        return false;
    }
    if ((blocks['e'] || blocks['w']) && (blocks['e'] !== blocks['w'])) {
        return false;
    }

    return true;
}

const assert = require('assert').strict;

assert.equal(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), true);
assert.equal(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'e', 'w', 'w', 'e']), true);
assert.equal(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'e', 'w', ]), false);