/*
This function takes "recipe" and "available ingredients" both as objects as parameters and returns
 maximum possible number of cakes that can be made. 
 Example 
 1. let recipe = {flour: 500, sugar: 200, eggs: 1}  
    available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
    cakes(recipe, available)  returns 2 since there are only 5 eggs. 
    
    whereas 
2. let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100} available = {sugar: 500, flour: 2000, milk: 2000}.
    cakes(recipe, available)", 0 since there is no apple among the ingredients.
*/

const cakes = (recipe, available) => {
    const maxOfEach = Object.keys(recipe).map(key => {
      if(recipe[key] && available[key]) {
        return Math.floor(available[key] / recipe[key]);
      }
      return 0;
    });
    return Math.min(...maxOfEach);
  }

  const assert = require('assert').strict;
  const recipe = {flour: 500, sugar: 200, eggs: 1};  
  const  available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

  assert.equal(cakes(recipe, available), 2);