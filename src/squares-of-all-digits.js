function squareDigits(num){
    let str = '';
    
    while(num > 0) {
      str = Math.pow(num % 10, 2) + str;
      num = Math.floor(num / 10);
    }
    
    return parseInt(str);
  }