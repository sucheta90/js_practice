function range(start,end,step=1){
  let arrayOfNumbers = [];
  if(step < 0){
    for(let i = start ; i >= end; i+=step){
      arrayOfNumbers.push(i);
  }
  return arrayOfNumbers
  
  }
  else{
    for(let i = start ; i <= end; i++){
        arrayOfNumbers.push(i);
    }
   return arrayOfNumbers    

  }


}

function sum(data){
	let totalSum =0;
  	for(let number of data){
    	totalSum += number
    }
  return totalSum
}




check = range(1,10,2);
console.log(check)

check = range(10,2,-1);
console.log(check)