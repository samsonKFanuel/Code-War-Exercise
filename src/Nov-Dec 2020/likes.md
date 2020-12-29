### Kata:

Who likes it?

#### Description:

You probably know the "like" system from Facebook and other pages.
People can "like" blog posts, pictures or other items. Create the text that should be displayed next to such an item.

#### Task:

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

- likes [] -- must be "no one likes this"
- likes ["Peter"] -- must be "Peter likes this"
- likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
- likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
- likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

```javascript
function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return names[0] + " likes this";

    case 2:
      return names.join(" and ") + " like this";

    case 3:
      return names.slice(0, 2).join(", ") + " and " + names[2] + " like this";

    default:
      return (
        names.slice(0, 2).join(", ") +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}

const assert = require("assert").strict;

assert.equal(likes([]), "no one likes this");
assert.equal(likes(["Peter"]), "Peter likes this");
assert.equal(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
assert.equal(likes(["Max", "John", "Mark"]), "Max, John and Mark like this");
assert.equal(
  likes(["Alex", "Jacob", "Mark", "Max"]),
  "Alex, Jacob and 2 others like this"
);
```
