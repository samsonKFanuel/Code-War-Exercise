const compare = (a, b) => {
    if(a < b) {
        return -1;
    }
    else if(a > b) {
        return 1;
    }
    return 0;
};

const dblLinear = (n) => {
    const u = [1];
    var curr = 1;
    const used = [];
    
    do {
        const y = 2 * curr + 1;
        const z = 3 * curr + 1;
        
        const len = u.length;
        if(len >= n + 1 && y >= u[n]) {
            return u[n];
        }
        
        !u.includes(y) && u.push(y);
        !u.includes(z) && u.push(z);
        used.push(curr);
        u.sort(compare);
        

        const pos = used.length;
        if(JSON.stringify(u.slice(0, pos)) !== JSON.stringify(used)) {
            curr = u.slice(0, pos).filter(x => used.includes(x)); 
        }
        else {
            curr = u[pos]
        }
        count++;

    } while(true);
}

const assert = require('assert').strict;

assert.equal(dblLinear(10), 22);
assert.equal(dblLinear(100), 447);