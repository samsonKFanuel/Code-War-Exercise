const songDecoder = (song) => song.replace(/(WUB)+/g, ' ').trim();

const assert = require('assert').strict;

assert.equal(songDecoder("AWUBBWUBC"), "A B C");
assert.equal(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C");
assert.equal(songDecoder("WUBAWUBBWUBCWUB"), "A B C", "heading or trailing spaces should be removed");