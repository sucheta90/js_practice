/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.*/
function destroyer(arr) {
    for(let i= 1; i < arguments.length; i++){
        arr = arr.filter(element =>{
            if(element!== arguments[i]){
                return element;
            }
        })
    }
           
  return arr
  
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))

// console.log(arr.splice(arr.indexOf(element),1));