function toCamelCase(str){
    if (str != ""){
        let splitter = "_";
        if (str.includes('-')){
            splitter = "-";
        }
        let newArray = str.split(splitter);
            for (let element = 1 ; element < newArray.length; element++){
                let newElement = newArray[element];
                newElement = newElement[0].toUpperCase() + newElement.substring(1);
                newArray[element] = newElement;
                
            }
            return newArray.join("")  
            
        }
    else return "" 
}
        

let something = toCamelCase('');
console.log(something) 
    


