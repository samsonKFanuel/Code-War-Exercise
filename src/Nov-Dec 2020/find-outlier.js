function findOutlier(integers){
    let evenCount = 0, oddCount = 0;
    
    [0,1,2].forEach(n => {
      if(integers[n] % 2 === 0){
        evenCount += 1;
      }
      else {
        oddCount += 1;
      }
    });
    
    if(evenCount > oddCount) {
      return integers.find(n => n % 2 !== 0);
    }
    
    return integers.find(n => n % 2 === 0);
  }

const assert = require('assert').strict;

assert.equal(findOutlier([0, 1, 2]), 1)
assert.equal(findOutlier([1, 2, 3]), 2)
assert.equal(findOutlier([2,6,8,10,3]), 3)
assert.equal(findOutlier([0,0,3,0,0]), 3)
assert.equal(findOutlier([1,1,0,1,1]), 0)