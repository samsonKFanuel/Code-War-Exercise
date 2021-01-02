const countSmileys = (arr) => {
    return arr.length ?
        arr.filter(w => w.match(/[:;](-|~)?[)D]/) !== null).length : 0;
}

const assert = require('assert').strict;

assert.equal(countSmileys([]), 0);
assert.equal(countSmileys([':D', ':~)', ';~D', ':)']), 4);
assert.equal(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
assert.equal(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);