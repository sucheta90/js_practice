function divisors(integer) {
    let arrayOfDivisors = [];
    for(let divisor= 2;divisor < integer; divisor++){
        if (integer% divisor== 0){
          arrayOfDivisors.push(divisor);
        }  
      }
      
    if (arrayOfDivisors.length == 0){
        return `${integer}is prime` 
      }
    else return arrayOfDivisors;  
  };


  let z = divisors(23);
   console.log(z)