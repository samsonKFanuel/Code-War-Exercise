### Kata: 
Snail Sort

#### Description:
Sort array with snail shape.

#### Task:
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.




``` javascript 
const snail = (array) => {
    const ar = [];
    var arrayCopy = JSON.stringify(array);
    arrayCopy = JSON.parse(arrayCopy);
    var len = arrayCopy[0];

    while(len && len.length) {
        const row1 = arrayCopy[0];
        for(let i = 0; i < row1.length; i++) {
            ar.push(arrayCopy[0][i])
        }

        arrayCopy = arrayCopy.slice(1);

        for(let j = 0; j < arrayCopy.length; j++) {
            const lastCol = arrayCopy[j];
            ar.push(arrayCopy[j][lastCol.length - 1]);
            arrayCopy[j].pop();
        }
        
        if(arrayCopy.length) {
            const newRow1 = arrayCopy[arrayCopy.length - 1];
            for(let k = newRow1.length - 1; k >= 0; k--) {
                ar.push(arrayCopy[newRow1.length - 1][k]);
            }
        }
        
        arrayCopy = arrayCopy.slice(0, arrayCopy.length - 1);
        
        for(let l = arrayCopy.length - 1; l >= 0; l--) {
            ar.push(arrayCopy[l][0]);
            if(arrayCopy[l].length) {
                arrayCopy[l] = arrayCopy[l].slice(1);
            }
        }
        
        len = arrayCopy[0];
    }
    return ar;
}

const assert = require('assert').strict;

assert.deepEqual(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
assert.deepEqual(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), 
[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
```