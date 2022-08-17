function sumAll(arr) {
    let sortArr = arr.sort(function(a,b){return b - a })
    let newArr = [];
    for(let i= sortArr[0]; i >= sortArr[1];i--){
      newArr.push(i);
    }
    let finalArr = newArr.reduce((acc, current)=>
       acc + current, 0)
    return finalArr
  }
  sumAll([1, 4]);