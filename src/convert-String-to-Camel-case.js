function toCamelCase(str){
    const strArr = str.split('');
    
    for (let i = 0; i < str.length - 1; i++) {
      
      if(str[i] === '-' || str[i] === '_') {
        strArr[i+1] = strArr[i+1].toUpperCase();
      }
    }
    const newStr = strArr.join('').replace(/-|_/g, '');
    return newStr;
  }

const assert = require('assert').strict;

assert.equal(toCamelCase(''), '', "An empty string was provided but not returned");
assert.equal(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value");
assert.equal(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value");
assert.equal(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value");