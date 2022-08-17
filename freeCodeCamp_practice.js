function titleCase(str) {
    let strArray = str.toLowerCase().split(" ");
    console.log(strArray);
    let newArray = strArray.map(element => element[0].toUpperCase()+ element.slice(1,) );
    return newArray.join(" ");
  
  }
  
//   console.log(titleCase("I'm a little tea pot"));

function frankenSplice(arr1, arr2, n) {
    let newArray = arr2.slice(0,);
  newArray.splice(n,0, ...arr1);
  console.log(arr2)
  return newArray;
  }
  
//  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)) ;

function bouncer(arr){
  for(let i = 0; i < arr.length; i++ ){
    let element = new Boolean(arr[i]);
    console.log(element)
    // if(element.valueOf() === false ){
    //   arr.splice(i,1);
    //   i--;
    // }
    if (! arr[i]) {
      arr.splice(i,1);
      i--;
    }
    
  }
  return arr;
}

// console.log(bouncer([7, "ate", "", false, 9, undefined, 0, -1]))

function getIndexToIns(arr, num) {
  arr.sort ((a,b)=> a - b );
  for (let i = 0; i < arr.length; i++){
    if(arr[i]>= num){
      return i
    }
  }
  return arr.length

}
  
  


console.log(getIndexToIns([90,-100,5,39,900,-1000,-2,0,3,5,80], 19));