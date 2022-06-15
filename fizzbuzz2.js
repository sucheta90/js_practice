const results = [];
const fizzbuzz = (n) => {
  // ADD CODE HERE...
  for (let i = 1; i <= n; i++){
    if(i % 3==0 && i % 5==0){
      results.push('fizzbuzz')
    }
    else if (i % 3== 0){
      results.push('fizz')
    }
    else if (i % 5== 0){
      results.push('buzz')
    }
    else{
      results.push(i)
    }
  }
  return results
};

fizzbuzz(16);
console.log(results);