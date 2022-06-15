function numberArrayManipulation(array, instruction){
    let outputArray = [];
    for (let i = 0; i < array.length ; i++){
        outputArray.push(instruction(array[i]));
    }
return outputArray
}

function multiplyByTwo(n){
    return n * 2
}


let myArray = [1,2,3]
let result = numberArrayManipulation(myArray, multiplyByTwo);
console.log(result)