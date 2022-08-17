function smallestCommons(arr) {
    let multiple = 1;
    let rangeArr=[];
    let masterArr = [];
    let sortedArr = arr.sort((a,b)=>{return a-b});
    for(let i = sortedArr[0]; i <= sortedArr[1]; i++){
        rangeArr.push(i);
    }
    
      
      return rangeArr;
    }