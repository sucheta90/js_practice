/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.*/
function diffArray(arr1, arr2) {
  
    const newArr1= arr1.filter(element=>{
      if(!arr2.includes(element)){
        return element;
      }
    }).map(element=> element)
    
  
    const newArr2 = arr2.filter(element=>{
      if(!arr1.includes(element)){
        return element;
      }
    }).map(element=> element)
    
    return newArr1.concat(newArr2)
  
}
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

