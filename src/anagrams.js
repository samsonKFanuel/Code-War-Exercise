const  anagrams = (word, words) => {
  const sortedWord = Array.from(word.toLowerCase()).sort().join('');

  return words.filter(w => sortedWord === Array.from(w.toLowerCase()).sort().join(''));
}

const assert = require('assert').strict;

assert(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'] );
assert(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
