function isIsogram(str){
    if (str== ""){return true};
    let string=  str.toLowerCase();
  
    console.log(string);
    for (let i=0; i < string.length; i++){
        let char = string[i]
        let new_str = string.slice(i+1);
        // console.log(char);
        // console.log(new_str);
        if (new_str.includes(char)){
           return false
        }
        else{continue}
    }
    if (str.length){
        return true
    }
}






let x = isIsogram('hello');
console.log(x)