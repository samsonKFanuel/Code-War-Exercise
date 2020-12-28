function high(x){
    let highestWord = '';
    let score = 0;
    
    x.split(' ').forEach(w => {
      let currScore = 0;
      w.split('').forEach((ch, i) => currScore += w.charCodeAt(i) - 96);
      
      if(score < currScore) {
        score = currScore;
        highestWord = w;
      }
    });
    
    return highestWord;
  }

const assert = require('assert').strict;

assert.equal(high('man i need a taxi up to ubud'), 'taxi');
assert.equal(high('what time are we climbing up the volcano'), 'volcano'); 
assert.equal(high('take me to semynak'), 'semynak');
