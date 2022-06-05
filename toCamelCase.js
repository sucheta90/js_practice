function toCamelCase(str){
if (str != ""){
    if (str.includes('-')){
        let newString = str.split('-');
        for (let element = 0 ; element < newString.length; element++){
            if (element!= 0){
                let newElement = newString[element];
                newElement = newElement[0].toUpperCase() + newElement.substring(1);
                newString[element] = newElement;
            } 
        }
        return newString.join("")  
        
    }
    else if (str.includes('_')){
        let newString = str.split('_');
        for (let element = 0 ; element < newString.length; element++){
            if (element!= 0){
                let newElement = newString[element];
                newElement = newElement[0].toUpperCase() + newElement.substring(1);
                newString[element] = newElement;
            } 
        }
        return newString.join("")    
    }
    else{
        return ""
    }
}

}


let something = toCamelCase('the_stealth_warrior');
console.log(something)

function test(str) {
    let newString = []
    let splitter = '_'
    if (str.includes('-')){
        
    }
    newString = str.split(splitter);
    console.log(newString)
    
    for(let element = 0 ; element < newString.length; element++){
        
    }
}
function for_loop() {

}

array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

const array1 = [1, 2, 3, 4];

  // 9 + 1 + 2 + 3 + 4
const initialValue = 0;
array1.reduce(
    function (previousValue, currentValue) {
        return previousValue + currentValue
    },
    initialValue
  );
  