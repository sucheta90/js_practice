function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for(let i = 0; i < arr.length; ){
        
      newArr.push(arr.slice(i,i+size))
        i+= size;
    }
    console.log(newArr)
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);