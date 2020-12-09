function cakes(recipe, available) {
    const maxOfEach = Object.keys(recipe).map(key => {
      if(recipe[key] && available[key]) {
        return Math.floor(available[key] / recipe[key]);
      }
      return 0;
    });
    return Math.min(...maxOfEach);
  }