const getNextPrime = (n) => {
    var k = n;
    while(true) {
      var i = 1, count = 0, maxK = Math.floor(k/2)
      while(i <= maxK && count < 2) {
        if(k % i === 0) {
          count++;
        }
        i++;
      }
      if(count === 1) {
        return k;
      }
      k++;
    }
  };
  
  const sumOfDivided = (lst) => {
    var sortedSumArr = [];
    
    var divisor = 2, sumOfDivided = 0;
    const maxPrime = Math.max(...lst); 
    
    while(divisor <= maxPrime) {
      const prev = sumOfDivided;
      sumOfDivided = lst.reduce((ac, curr) => curr % divisor === 0 ? (ac + curr) : (ac + 0), 0);

      const newArr = [divisor, sumOfDivided];
      
      sortedSumArr.push(newArr);
      console.log('divisor: ', divisor)
      divisor = getNextPrime(divisor + 1);
    };
    
    var size = sortedSumArr.length - 1;
    var lastNonZeroVal = sortedSumArr[size][1];
    
    while(lastNonZeroVal === 0) {
        size--;
        lastNonZeroVal = sortedSumArr[size][1];
    }

    if(size !== sortedSumArr.length - 1) {
      sortedSumArr = sortedSumArr.slice(0, size + 1)
    }
    
    return sortedSumArr;
  };
 
console.log('sortedSumArr: ', sumOfDivided([12, 15]))  // [ [2, 12], [3, 27], [5, 15] ]);
console.log('sorted: ', sumOfDivided([15,21,24,30,45])) //[ [2, 54], [3, 135], [5, 90], [7, 21] ]