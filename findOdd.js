let doCheckOdd = function(data,array){
    let count = 0;
    for (let i = 0; i < array.length ; i++){
        if (data == array[i]){
            count+= 1;
        }
    }
    return count
}

function findOdd(A){
    let arrayCopy = A;
    if (arrayCopy.length == 1){
        return arrayCopy[0];
    }
    for (let element of arrayCopy){
        let elementCount = doCheckOdd(element , arrayCopy);
        if (elementCount % 2 == 0){
            continue
        }
        else return element
    }
    
}

let check = findOdd([1,2,3,2,2,3,1]);
console.log(check);

check = findOdd([1,2,3,2,1]);
console.log(check);

check = findOdd([0]);
console.log(check);