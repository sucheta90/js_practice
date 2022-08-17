function reverseArray(array){
    let newArray = [];
    for(let i= array.length -1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray
}

function reverseArrayInPlace(array){
    let arrayLength = array.length;
    let startNumber = 0;
    let lastNumIndex = arrayLength-1;
    let tempNum = 0;
    let i = 0;
    while (i<= Math.floor(arrayLength/2)){
        startNumber = array[i];
        array[i] = array[lastNumIndex -i];
        array[lastNumIndex-i] = startNumber;
        i++;
    }



return array

}



let check = reverseArray([1,2,3,4,5,6]);
console.log(check)

let check2= reverseArrayInPlace([1,2,3,4,6,10,15]);
console.log(check2)
