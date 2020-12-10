<h4>Description</h4>
<p>Given a word that may or may not end with number/s or digit/s</p>

<h3>Task:</h3>
<ol>
<li>If there is number at the end of the string increment by 1 </li>
<li> If not add (concatenate) the number '1' to the end. </li>
</ol>

<h4>Example:</h4> 
<ol>
<li>incrementString('Test10') should return Test11 </li>
<li>incrementString('Test') should return Test1</li>
</ol>

<h4>Attention: </h4>
<p> 0's at the end of the number should be considered. </p>

<p> Example
 <ol>
 <li>incrementString('Test0099') should return Test0100</li>
 <li>incrementString('Test0094') should return Test0095</li>
 </li>

<h3>Kata's link: Increment String </h3>
<hr />

```javascript
const isNumber = (ch) => /\d/.test(ch);

const incrementString = (strng) => {
    var i = strng.length;
    const ch = strng.charAt(i - 1)

    if (isNumber(ch)) {
        if (ch === '9') {
            while (isNumber(strng[i - 1])) {
                i--;
            }
            if (strng[i] === '0' && strng[i + 1] === '0') {
                i++;
            }
            return strng.slice(0, i) + (parseInt(strng.slice(i), 10) + 1);
        }
        return strng.slice(0, i - 1) + (parseInt(ch, 10) + 1);
    }

    else return strng + 1;
}


const assert = require('assert').strict;

assert.equal(incrementString('Test'), 'Test1');
assert.equal(incrementString('Test042'), 'Test043');
assert.equal(incrementString('Test1000'), 'Test1001');
assert.equal(incrementString('Test99'), 'Test100');
assert.equal(incrementString('Test099'), 'Test100');
assert.equal(incrementString('Test0099'), 'Test0100');
```