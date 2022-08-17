// whether an input is an array.
function is_array(input){
    return Array.isArray(input)
}

// console.log(is_array([1,2,3]));
// console.log(is_array('hello'))

// function to clone an array:
function array_Clone(data){
    let newArray = [];
    data.forEach(element => newArray.push(element))
    return newArray
}


// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]))

