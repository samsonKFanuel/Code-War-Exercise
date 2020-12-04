const dblLinear = (n) => {
    var ai = 0, bi = 0, eq = 0;
    const sequence = [1];
    while (ai + bi < n + eq) {
        const y = 2 * sequence[ai] + 1;
        const z = 3 * sequence[bi] + 1;
        if (y < z) { sequence.push(y); ai++; }
        else if (y > z) { sequence.push(z); bi++; }
        else { sequence.push(y); ai++; bi++; eq++; }
    }
    return sequence.pop();
}

const assert = require('assert').strict;

assert.equal(dblLinear(10), 22);
assert.equal(dblLinear(100), 447);