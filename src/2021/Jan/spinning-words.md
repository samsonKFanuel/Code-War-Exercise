### Kata:

[Stop Spinning my words](https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript)

#### Description

Reverse words with more than 5 characters in a sentence.

#### Task:

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

#### Example:

- spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

* spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

#### Attention:

Your answer should always be 6 characters long, the shorthand with 3 will not work here.

```javascript
const spinWords = (words) => {
  return words
    .split(" ")
    .map((w) => {
      if (w.length >= 5) {
        return w.split("").reverse().join("");
      }
      return w;
    })
    .join(" ");
};

const assert = require("assert").strict;

assert.equal(spinWords("Welcome"), "emocleW");
assert.equal(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
assert.equal(spinWords("This is a test"), "This is a test");
assert.equal(spinWords("This is another test"), "This is rehtona test");
assert.equal(
  spinWords("You are almost to the last test"),
  "You are tsomla to the last test"
);
assert.equal(
  spinWords("Just kidding there is still one more"),
  "Just gniddik ereht is llits one more"
);
assert.equal(
  spinWords("Seriously this is the last one"),
  "ylsuoireS this is the last one"
);
```
